"use client";

import React, { useEffect, useState } from "react";
import s from "./FilterPanel.module.scss";
import FilterPanelBody from "../FilterPanelBody";
import { useMediaQuery } from "hooks/useMediaQuery";
import CustomDrawer from "@/components/modals/CustomDrawer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SortBySelect from "../SortBySelect";

const FilterPanel = ({ isMobile, filters, sortOptions }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [mobileParams, setMobileParams] = useState(searchParams.toString());
  const isMobileDevice = useMediaQuery("(max-width:768px)", isMobile);
  const router = useRouter();

  const selectFilter = (checked, code, value) => {
    let url = isMobile ? mobileParams : window.location.search;

    let params = new URLSearchParams(url);

    let currentValues = params.get(code) ? params.get(code).split(",") : [];

    if (checked) {
      if (!currentValues.includes(value)) {
        currentValues.push(value);
      }
    } else {
      currentValues = currentValues.filter((v) => v !== value);
    }

    if (currentValues.length > 0) {
      params.set(code, currentValues.join(","));
    } else {
      params.delete(code);
    }

    if (params.has("page")) {
      params.set("page", 1);
    }

    if (!isMobileDevice) {
      router.replace(`?${params.toString()}`, { scroll: false });
      scrollToTop();
    } else {
      setMobileParams(params.toString().replaceAll("%2C", ","));
    }
  };

  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const clearFilters = () => {
    router.replace(pathname);
  };

  const applyFilters = () => {
    let params = new URLSearchParams(mobileParams);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  if (isMobileDevice) {
    return (
      <div className={s["plp-filter-container"]}>
        <div className={s["plp-filter-header-mobile"]}>
          <div className={s["plp-filter-header-mobile-item"]}>
            <CustomDrawer
              showFooter={true}
              title={"Filters"}
              iconPostion="left"
              headerIcon="https://www.vijaysales.com/content/dam/vijaysaleswebsite/plp/filter-icon.svg"
              clearFilters={clearFilters}
              applyFilters={applyFilters}
            >
              <FilterPanelBody
                isMobile={isMobile}
                filters={filters}
                handleClear={clearFilters}
                selectFilter={selectFilter}
                mobileParams={mobileParams}
              />
            </CustomDrawer>
          </div>
          <div className={s["plp-filter-header-mobile-item"]}>
            <CustomDrawer
              showFooter={false}
              title={"Sort by"}
              iconPostion="right"
              headerIcon="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/chevron-down.svg"
            >
              <SortBySelect isMobile={isMobile} options={sortOptions} />
            </CustomDrawer>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s["plp-filter-container"]}>
      <FilterPanelBody
        isMobile={isMobile}
        filters={filters}
        handleClear={clearFilters}
        selectFilter={selectFilter}
      />
    </div>
  );
};

export default FilterPanel;
