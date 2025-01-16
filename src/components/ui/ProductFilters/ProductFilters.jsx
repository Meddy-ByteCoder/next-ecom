"use client";

import React, { useState } from "react";
import s from "./ProductFilters.module.scss";
import Link from "next/link";

const ProductFilters = ({ customStyles = {}, filters = [] }) => {
  const [active, setActive] = useState(filters?.[0].id);

  const handleFilterClick = (id) => {
    setActive(id);
  };

  // console.log("c", customStyles);
  return (
    <div
      className={s["product-grid-filter"]}
      style={{ ...customStyles.filterContainer }}
    >
      {filters.map((filter) => (
        <div
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`${s["product-grid-filter-tab"]} ${
            active == filter.id ? s["active"] : ""
          }`}
        >
          {filter.title}
        </div>
      ))}
    </div>
  );
};

export default ProductFilters;
