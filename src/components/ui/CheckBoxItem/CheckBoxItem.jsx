"use client";

import React, { useMemo } from "react";
import "./CheckboxItem.scss";
import { Checkbox } from "../core/checkbox";
import { useRouter, useSearchParams } from "next/navigation";

const CheckBoxItem = ({
  code,
  value,
  label = "",
  name = "",
  selectFilter,
  mobileParams,
  isMobile = false,
}) => {
  const searchParams = useSearchParams();
  const currentParams = isMobile
    ? convertParams(mobileParams, code)
    : searchParams.get(code);

  function getStatus(string, value) {
    if (string) {
      let arr = string?.split(",");
      return arr.includes(value);
    }
    return false;
  }

  function convertParams(string, code) {
    let params = new URLSearchParams(string);
    let val = params.get(code) ?? "";
    return val.replaceAll("%2C", ",");
  }

  const checked = getStatus(currentParams, value);

  return (
    <div className="flex items-center space-x-2 my-4 first:mt-0 last:mb-0">
      <Checkbox
        className={`h-[18px] w-[18px] rounded-[2px] ${
          checked ? "border-zinc-900" : "border-zinc-500"
        }`}
        id={name}
        name={name}
        checked={checked}
        onCheckedChange={(check) => selectFilter(check, code, value)}
      />
      <label
        htmlFor={name}
        className={`text-xs cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
          checked ? "text-zinc-900 font-bold" : "text-zinc-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBoxItem;
