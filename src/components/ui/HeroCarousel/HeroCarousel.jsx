"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./HeroCarousel.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useMediaQuery } from "hooks/useMediaQuery";

export default function HeroCarousel({
  isMobile = false,
  priority = true,
  slides = [],
}) {
  const isMobileDevice = useMediaQuery("(max-width:768px)", isMobile);

  return (
    <>
      <div className={`${styles["carousel-parent"]} swiper-custom`}>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          className={styles["vs-banner-swiper"]}
          pagination={{
            clickable: true,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={styles["vs-banner-swiper-slide"]}
            >
              <picture>
                {/* <source media="(max-width: 768px)" srcSet={slide.mobileSrc} /> */}
                <Image
                  src={isMobileDevice ? slide.mobileSrc : slide.desktopSrc}
                  width={isMobileDevice ? 375 : 1250}
                  height={isMobileDevice ? 272 : 400}
                  priority={priority}
                  loading="eager"
                  sizes="(max-width: 568px) 375px, (max-width: 1200px) 50vw, 100vw"
                  className={styles.carouselImage}
                  alt={slide.alt}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
