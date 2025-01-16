import buildProductQuery from "./buildProductQuery";


export default async function getProducts({ filters, sort, pageSize = 30, currentPage = 1 }) {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("store", "vijay_sales");

        const queryobj = buildProductQuery({ filters, pageSize, currentPage, sort })

        const graphql = JSON.stringify({
            query: queryobj.query,
            variables: queryobj.variables
        })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: graphql,
        };

        const response = await fetch("https://mdm.vijaysales.com/api/graphql", {
            ...requestOptions,
            cache: "force-cache",
        })

        const { data } = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }

}