import { skuQuery } from "constants/queries/sku";

export default async function getProductSku() {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
        query: skuQuery,
        variables: {}
    })
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow"
    };

    const response = await fetch("https://stage.vijaysales.com/content/cq:graphql/vijaysaleswebsite/endpoint.json", {
        ...requestOptions,
        cache: "no-cache",
        next: {
            tags: ["aem-product-sku"]
        }
    })
    const { data } = await response.json()
    return data
}