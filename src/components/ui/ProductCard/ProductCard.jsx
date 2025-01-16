import React from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  title = "",
  size = "sm",
  imgWidth = 0,
  imgHeight = 0,
  imgsrc = null,
  pricingModel = {},
  primNudgeText = "",
  secNudgeText = "",
  customStyles = {},
  linkHref = "",
  loading = "eager",
  priority = false,
}) => {
  // console.log("c", customStyles);

  return (
    <div
      className={`${styles["product-card"]} ${styles[size]}`}
      style={{ ...customStyles.card }}
    >
      <Link href={linkHref}>
        <div
          className={`${styles["product-card-head"]}`}
          style={{ ...customStyles.cardHead }}
        >
          <div className={`${styles["product-card-image"]}`}>
            <Image
              priority={priority}
              loading={loading}
              width={imgWidth}
              height={imgHeight}
              src={imgsrc}
              sizes="(max-width:768px) 170px,100vw"
              alt="iphone"
            />
          </div>
          <div className={styles["product-tags-wrapper"]}>
            {primNudgeText && (
              <div className={`${styles["product-tag"]} ${styles["primary"]}`}>
                <span>{primNudgeText}</span>
              </div>
            )}

            {secNudgeText && (
              <div
                className={`${styles["product-tag"]} ${styles["secondary"]}`}
              >
                <span>{secNudgeText}</span>
              </div>
            )}
          </div>
        </div>
        <div className={styles["product-card-body"]}>
          <div className={styles["product-card-title"]}>
            <span>{title}</span>
          </div>

          <div className={styles["price-wrapper"]}>
            <div className={styles["discounted-price"]}>
              <span className={styles["final-price"]}>
                ₹{pricingModel?.maximum_price?.final_price?.value}
              </span>
            </div>

            <div className={styles["original-price"]}>
              <span className={styles["mrp-label"]}>MRP</span>
              <div className={styles["price"]}>₹{pricingModel.mrp}</div>
            </div>

            <div className={styles["discount-percent"]}>
              <span>
                <span>{pricingModel?.discountPercent}</span>
              </span>
              % off
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
