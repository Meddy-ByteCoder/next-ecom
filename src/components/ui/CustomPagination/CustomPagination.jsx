import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../core/pagination";
import getPaginationRanges from "services/getPagination";

const CustomPagination = ({ searchParams, totalCount, page }) => {
  // console.log(searchParams, page, totalCount);

  const totalLinks = Math.ceil(totalCount / 30);

  const pages = getPaginationRanges({
    currentPage: page,
    totalPages: totalLinks,
    range: 5,
  });

  return (
    <Pagination>
      <PaginationContent className="max-[375px]:flex-wrap">
        <PaginationItem>
          <PaginationPrevious
            className={page === 1 ? "pointer-events-none text-[#7b7b7b]" : ""}
            href={{
              pathname: "",
              query: { ...searchParams, page: page === 1 ? 1 : page - 1 },
            }}
          />
        </PaginationItem>
        {pages.map((ele) => {
          if (ele == "...") {
            return (
              <PaginationItem key={ele}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          } else {
            return (
              <PaginationItem key={ele}>
                <PaginationLink
                  // className={}
                  href={{
                    pathname: "",
                    query: { ...searchParams, page: ele },
                  }}
                >
                  {ele}
                </PaginationLink>
              </PaginationItem>
            );
          }
        })}
        <PaginationItem>
          <PaginationNext
            className={
              page === totalLinks ? "pointer-events-none text-[#7b7b7b]" : ""
            }
            href={{
              pathname: "",
              query: {
                ...searchParams,
                page: page >= totalLinks ? totalLinks : page + 1,
              },
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
