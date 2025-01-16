"use client";

import React, { useRef, useState } from "react";
import s from "./ProductCarousel.module.scss";
import Image from "next/image";

const ProductCarousel = ({
  customStyles = {},
  btnBgColor = "#fff",
  children,
}) => {
  const carouselRef = useRef(null);
  const [disableBtn, setDisableBtn] = useState("left");

  function scrollLeft() {
    const scrollableDiv = carouselRef.current;
    // debugger;
    if (scrollableDiv.scrollLeft > 0) {
      scrollableDiv.scroll({
        left: scrollableDiv.scrollLeft - 200,
        behavior: "smooth",
      });

      scrollableDiv.scrollLeft == 0
        ? setDisableBtn("left")
        : setDisableBtn(null);
    } else {
      setDisableBtn("left");
      console.log("No more space to scroll left.");
    }
  }

  function scrollRight() {
    const scrollableDiv = carouselRef.current;
    scrollableDiv.style.scrollBehavior = "smooth";

    const maxScrollLeft = scrollableDiv.scrollWidth - scrollableDiv.clientWidth;
    const distanceLeft = maxScrollLeft - scrollableDiv.scrollLeft;
    const scrollRightDistance = distanceLeft > 200 ? 200 : distanceLeft;

    if (scrollableDiv.scrollLeft < maxScrollLeft - 0.5) {
      scrollableDiv.scroll({
        left: scrollableDiv.scrollLeft + scrollRightDistance,
        behavior: "smooth",
      });
      scrollableDiv.scrollLeft > maxScrollLeft - 0.5
        ? setDisableBtn("right")
        : setDisableBtn(null);
    } else {
      setDisableBtn("right");
      console.log("No more space to scroll right.");
    }
  }

  return (
    <div
      className={s["product-carousel-wrapper"]}
      style={{ ...customStyles?.container }}
    >
      <div
        className={s["product-carousel-container"]}
        ref={carouselRef}
        id="demo"
      >
        {children}
      </div>

      <div
        className={s["product-carousel-btns"]}
        style={{ backgroundColor: btnBgColor }}
      >
        <button
          disabled={disableBtn === "left"}
          onClick={scrollLeft}
          className={s["btn-next"]}
          type="button"
          title="Show previous"
          aria-label="Show previous"
        >
          <Image
            width={24}
            height={24}
            alt="back"
            src={`https://www.vijaysales.com/content/dam/vijaysaleswebsite/arrow-back.svg`}
          />
        </button>

        <button
          disabled={disableBtn === "right"}
          onClick={scrollRight}
          className={`${s["btn-next"]}`}
          type="button"
          title="Show next"
          aria-label="Show next"
        >
          <Image
            width={24}
            height={24}
            alt="forward"
            src={`https://www.vijaysales.com/content/dam/vijaysaleswebsite/arrow-forward.svg`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
