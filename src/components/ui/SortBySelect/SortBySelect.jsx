"use client";

import React, { useState } from "react";
import s from "./SortBySelect.module.scss";
import CustomSelect from "../CustomSelect";
import { useRouter, useSearchParams } from "next/navigation";

const SortBySelect = ({ isMobile = false, options = [] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortValue = searchParams.get("sort_by");
  const value = sortValue?.split("_")[1] ?? "";

  const handleChange = (option) => {
    let params = new URLSearchParams(searchParams);
    params.set("sort_by", `price_${option}`);
    console.log(params.toString());

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  console.log(isMobile);

  if (isMobile) {
    return (
      <div className={s["plp-sortby-mobile"]}>
        <div className={s["plp-sortby-mobile-title"]}>Sort By</div>
        <ul>
          {options.map((ele) => (
            <li key={ele.value} onClick={() => handleChange(ele.value)}>
              {ele.label}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <CustomSelect
      value={value}
      handleChange={handleChange}
      placeholder="Sort By"
      options={options}
      displayLabel
      customStyles={{
        container:
          "w-[352px] h-[52px] px-[12px] py-[15px] rounded-sm focus:ring-0",
      }}
    />
  );
};

export default SortBySelect;
