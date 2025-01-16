"use client";

import React, { useState } from "react";
import s from "./FilterPanelItem.module.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../core/accordion";
import CheckBoxItem from "../CheckBoxItem/CheckBoxItem";
import { RangeSlider } from "../core/rangeslider";
import { useParams, useSearchParams } from "next/navigation";

const FilterPanelItem = ({
  mobileParams = "",
  selectFilter,
  isMobile = false,
  title = "",
  id = "",
  code = "",
  filterOptions = [],
}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const displayedOptions = toggle ? filterOptions : filterOptions.slice(0, 4);

  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="py-3">{title}</AccordionTrigger>
      <AccordionContent>
        {id === "price" ? (
          <RangeSlider />
        ) : (
          <>
            {displayedOptions.map((option) => (
              <CheckBoxItem
                mobileParams={mobileParams}
                selectFilter={selectFilter}
                isMobile={isMobile}
                code={code}
                value={option.value}
                key={option.value}
                label={option.label}
                name={option.label}
              />
            ))}

            {filterOptions.length > 4 && (
              <button className={s["view-btn"]} onClick={handleToggle}>
                {toggle ? "View Less" : "View More"}
              </button>
            )}
          </>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};
export default FilterPanelItem;
