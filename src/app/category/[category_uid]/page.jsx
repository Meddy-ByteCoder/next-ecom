import React from "react";
import s from "./page.module.scss";
import SortBySelect from "@/components/ui/SortBySelect";
import ProductCard from "@/components/ui/ProductCard";
import FilterPanel from "@/components/ui/FilterPanel";
import getDevice from "services/getDevice";
import getProducts from "services/getProducts";
import CustomPagination from "@/components/ui/CustomPagination";

function getParams({ params, searchParams }) {
  let filters = { ...params, ...searchParams };
  let { page, sort_by, ...filteredFilters } = filters;
  if (!page) {
    page = 1;
  }
  let sort = {};

  if (sort_by) {
    let newSort = sort_by.split("_");
    sort[newSort[0]] = newSort[1];
  }
  return { filters: filteredFilters, page, sort };
}

const CategoryListingPage = async ({ params, searchParams }) => {
  const page = await params;
  const sp = await searchParams;
  const pageParams = getParams({ params: page, searchParams: sp });

  const isMobile = await getDevice();

  const pageData = await getProducts({
    sort: pageParams.sort,
    filters: pageParams.filters,
    currentPage: pageParams.page,
  });

  const products = pageData?.products?.items;
  const total = pageData?.products.total_count;

  const options = [
    { value: "ASC", label: "Low to High" },
    { value: "DESC", label: "High to Low" },
  ];

  return (
    <div className="vs-container">
      <div className={s["plp-wrapper"]}>
        <FilterPanel
          sortOptions={options}
          searchParams={sp}
          isMobile={isMobile}
          filters={pageData?.products.aggregations}
        />
        <div className={s["plp-heading-container"]}>
          <div className={s["plp-heading-title"]}>
            <h2>Buy Mobiles Tablets And Accessories Online</h2>
          </div>
          <div className={s["plp-heading-product-summary"]}>
            (Showing 1231 – 1260 products of 1274 products)
          </div>
        </div>
        <div className={s["plp-sortby-container"]}>
          <SortBySelect options={options} searchParams={sp} />
        </div>
        <div className={s["plp-products-container"]}>
          <div className={s["plp-products"]}>
            {products?.map((product) => (
              <ProductCard
                size={"sm"}
                customStyles={{ card: { margin: "0px" } }}
                key={product.sku}
                imgsrc={product?.image.url}
                title={product.name}
                imgHeight={170}
                imgWidth={170}
                pricingModel={{
                  ...product.price_range,
                  mrp: product.mrp,
                  discountPercent: product.discount_percentage,
                }}
                primNudgeText={"Recommended"}
                secNudgeText={"1000+"}
              />
            ))}
          </div>
          <div className={s["plp-pagination-container"]}>
            <CustomPagination
              searchParams={sp}
              page={Number(pageParams.page)}
              totalCount={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryListingPage;
