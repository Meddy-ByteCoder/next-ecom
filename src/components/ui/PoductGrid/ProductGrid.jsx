import React from "react";
import s from "./ProductGrid.module.scss";
import ProductCarousel from "../ProductCarousel";
import ProductFilters from "../ProductFilters";
import Link from "next/link";

const ProductGrid = async ({
  customStyles = {
    btnBgColor: "#fff",
  },
  title,
  secondTitle,
  filters = [],
  children,
}) => {
  return (
    <div className={s["product-grid-container"]}>
      <div className={s["product-grid-title"]}>
        <h3>{title}</h3>
      </div>

      {secondTitle && (
        <div className={s["product-grid-title"]}>
          <h3>{secondTitle}</h3>
        </div>
      )}

      <ProductFilters filters={filters} customStyles={customStyles} />

      <div className={s["product-grid-products"]}>
        <ProductCarousel btnBgColor={customStyles.btnBgColor}>
          {children}
        </ProductCarousel>
      </div>
      <div className={s["product-grid-link"]}>
        <Link href={""}>View All</Link>
      </div>
    </div>
  );
};

export default ProductGrid;
