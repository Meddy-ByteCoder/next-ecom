export default async function getPincodeDetails({ pincode = 400097 }) {
    const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");

    const raw = JSON.stringify({
        "header": {},
        "body": {
            "pincode": pincode
        }
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    const response = await fetch("https://mdm.vijaysales.com/web/api/oms-api/check-pincode/v1", requestOptions)
    const { body } = await response.json()

    return body.Master ?? {}
}