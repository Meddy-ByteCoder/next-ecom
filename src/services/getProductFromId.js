import { GET_PRODUCTS_BY_CATEGORY } from "constants/queries/getProductsQuery";

export default async function getProductFromId({ id }) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("store", "vijay_sales");

    const graphql = JSON.stringify({
        query: GET_PRODUCTS_BY_CATEGORY,
        variables: { "category_uid": id }
    })

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
    };

    const response = await fetch("https://mdm.vijaysales.com/api/graphql", {
        ...requestOptions,
        cache: "force-cache",
        next: {
            tags: [id?.[0]]
        }
    })

    const { data } = await response.json()
    return data

}