export default async function createCart(params) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
        query: "mutation {\n        createEmptyCart\n      }\n      ",
        variables: {}
    })
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow"
    };

    const response = await fetch("https://mdm.vijaysales.com/api/graphql", requestOptions)
    const { data } = await response.json()
    return data
}