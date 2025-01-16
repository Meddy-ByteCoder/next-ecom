"use client";

import React from "react";
import s from "./FilterPanelBody.module.scss";
import { Accordion } from "../core/accordion";
import Image from "next/image";
import FilterPanelItem from "../FilterPanelItem";

const FilterPanelBody = ({
  mobileParams = "",
  isMobile = false,
  filters = [],
  handleClear,
  selectFilter,
  children,
}) => {
  const defaultValues = filters.map((ele) => ele.attribute_code);

  return (
    <div className={s["plp-filter-panel"]}>
      <div className={s["plp-filter-header"]}>
        <div className={s["plp-filter-header-title"]}>
          <span className={s["plp-filter-header-title-img"]}>
            <Image
              src={
                "https://www.vijaysales.com/content/dam/vijaysaleswebsite/plp/filter-icon.svg"
              }
              height={24}
              width={24}
              alt="filter-icon"
            />
          </span>
          <span className={s["plp-filter-header-title-child"]}>Filters</span>
        </div>
        <div className={s["plp-filter-header-clear-btn"]}>
          <button onClick={handleClear}>Clear All</button>
        </div>
      </div>
      <div className={s["plp-filter-panel"]}>
        <Accordion
          defaultValue={defaultValues}
          type="multiple"
          className="w-full"
        >
          {filters.map((filter) => (
            <FilterPanelItem
              mobileParams={mobileParams}
              selectFilter={selectFilter}
              isMobile={isMobile}
              code={filter.attribute_code}
              key={filter.attribute_code}
              title={filter.label}
              id={filter.attribute_code}
              filterOptions={filter.options}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FilterPanelBody;
