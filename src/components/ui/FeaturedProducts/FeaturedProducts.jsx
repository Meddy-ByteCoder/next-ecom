import React from "react";
import s from "./FeaturedProducts.module.scss";
import Image from "next/image";
import Link from "next/link";
// import ProductGrid from "../PoductGrid";
import ProductCard from "../ProductCard";
import { filterArr, products } from "constants/product";
import ProductCarousel from "../ProductCarousel";

const FeaturedProducts = ({
  productData = [],
  titleImg = "",
  titleSize = "md",
  title,
  text,
  subText,
  customStyles,
  priority = false,
  loading = "eager",
}) => {
  // https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_12300264/vscontainer/image.coreimg.svg/1721908207814/super-offers.svg
  return (
    <div
      className={s["featured-products-wrapper"]}
      style={{ ...customStyles.container }}
    >
      <div className={s["featured-products-left"]}>
        {titleImg && (
          <div className={s["featured-products-title-img"]}>
            <Image height={67} width={190} src={titleImg} alt="product" />
          </div>
        )}
        {title && (
          <div className={`${s["featured-products-title"]} ${s[titleSize]}`}>
            <h4>{title}</h4>
          </div>
        )}

        {text && (
          <div className={s["featured-products-text"]}>
            <p
              style={{
                ...(!subText && {
                  borderBottom: "0px",
                  paddingBottom: 0,
                  marginBottom: 0,
                }),
              }}
            >
              {text}
            </p>
          </div>
        )}

        {subText && (
          <div className={s["featured-products-sub-text"]}>
            <Image
              height={25}
              width={24}
              alt="asterisk"
              src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/icons/asterisk.svg"
            />
            <p>{subText}</p>
          </div>
        )}

        <div className={s["featured-products-btn-container"]}>
          <Link href="" className={s["featured-products-btn"]}>
            View All
          </Link>
        </div>
      </div>
      <div className={s["featured-products-right"]}>
        <ProductCarousel>
          {productData.map((product) => (
            <ProductCard
              size={"md"}
              customStyles={customStyles}
              key={product.sku}
              imgsrc={product?.image.url}
              title={product.name}
              imgHeight={200}
              imgWidth={200}
              pricingModel={{
                ...product.price_range,
                mrp: product.mrp,
                discountPercent: product.discount_percentage,
              }}
              primNudgeText={"Recommended"}
              secNudgeText={"1000+"}
              priority={priority}
              loading={loading}
            />
          ))}
        </ProductCarousel>
      </div>
    </div>
  );
};

export default FeaturedProducts;
