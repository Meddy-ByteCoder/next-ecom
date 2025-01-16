import ProductDetail from '@/components/ui/ProductDetail'
import React from 'react'

export const metadata = {
    title: "Apple iPhone 16 Pro (128 GB Storage, Desert Titanium)",
    description: "Electronics shop: Choose from a wide range of mobiles, washing machine, camera, laptop &amp; many more from the top brands &amp; get exciting deals &amp; offers only at Vijay Sales.",
};
const page = () => {
    const productData = {
        name: 'Apple iPhone 16 (512GB Storage, White)',
        storeLink: '/content/vijaysaleswebsite/us/en/brands/apple-store.html',
        brand: 'Apple',
        price: 99400,
        offerPrice: 70900,
        mrp: 109900,
        discount: 10,
        emi: 4450,
        points: 746,
        vspPrice: 70900
    };
    return (
        <>
            <div className="vs-container">
                <div className="product-detail-page-wrapper">
                    <ProductDetail product={productData} />
                </div>
            </div>
        </>
    )
}

export default page