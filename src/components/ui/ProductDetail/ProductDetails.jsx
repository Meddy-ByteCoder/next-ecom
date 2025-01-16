"use client";

import Link from 'next/link';
import { SwiperSlide, Swiper, useSwiper } from 'swiper/react';
import Image from 'next/image';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from './ProductDetail.module.scss';

export default function ProductDetails() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const slides = [
        {
            desktopSrc: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/bank-offer/icici.svg",
            mobileSrc: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/bank-offer/icici.svg",
            alt: "Apple Family Banner",
            text: 'Flat Rs.4,000 Instant Discount on ICICI Bank Credit/Debit Card No Cost EMI.'
        },
        {
            desktopSrc: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/bank-offer/sbi-card.svg",
            mobileSrc: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/bank-offer/sbi-card.svg",
            alt: "Exhibition Banner",
            text: 'Flat Rs.4,000 Instant Discount on SBI Bank Credit Card No Cost EMI.'
        },
        {
            desktopSrc: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/bank-offer/hdfc.svg",
            mobileSrc: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/bank-offer/hdfc.svg",
            alt: "iPhone 16 Banner",
            text: 'Flat Rs.3500 Instant Discount on HDFC Bank Credit/Debit Card EMI 6 Months and Above Tenures'
        },
        {
            desktopSrc: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/bank-offer/kotak-bank.svg",
            mobileSrc: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/bank-offer/kotak-bank.svg",
            alt: "Apple Family Banner",
            text: 'Flat Rs.4,000 Instant Discount on KOTAK Bank Credit Card No Cost EMI.'
        },
        {
            desktopSrc: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/bank-offer/onecard.svg",
            mobileSrc: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/bank-offer/onecard.svg",
            alt: "Apple Family Banner",
            text: 'Flat Rs. 2000 Instant Discount on One Card Credit EMI'
        },
    ];

    const ProductImageSlide = [
        {
        "mobImage":'https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone16proandpromax_desert_titanium_1_.jpg?optimize=medium&fit=bounds&height=&width=',
        "img":'https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone16proandpromax_desert_titanium_1_.jpg?optimize=medium&fit=bounds&height=&width='
    },
        {
        "mobImage":'https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone16proandpromax_desert_titanium_1_.jpg?optimize=medium&fit=bounds&height=&width=',
        "img":'https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone16proandpromax_desert_titanium_1_.jpg?optimize=medium&fit=bounds&height=&width='
    },
        {
        "mobImage":'https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone16proandpromax_desert_titanium_1_.jpg?optimize=medium&fit=bounds&height=&width=',
        "img":'https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone16proandpromax_desert_titanium_1_.jpg?optimize=medium&fit=bounds&height=&width='
    },
        {
        "mobImage":'https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone16proandpromax_desert_titanium_1_.jpg?optimize=medium&fit=bounds&height=&width=',
        "img":'https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone16proandpromax_desert_titanium_1_.jpg?optimize=medium&fit=bounds&height=&width='
    }
]
  



    return (
        <>
            <div className={s['pdp']}>
                <div className={s["pdp-product"]}>

                    <Swiper
                        modules={[Pagination,Thumbs,Navigation]}
                        slidesPerView={1}
                        className={s["pdp-product-slides"]}
                        thumbs={{ swiper: thumbsSwiper }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            300: {
                                width: 300,
                                slidesPerView: 1,
                            },
                            1080: {
                                width: 400,
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {ProductImageSlide.map((slide, index) => (
                            <SwiperSlide
                                key={index}
                                className={s["vs-banner-swiper-slide"]}
                            >
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={slide.mobImage} />
                                    <Image
                                        className={s['pdp-product-img']}
                                        src={slide.img}
                                        alt="Apple iPhone 16 Pro (128 GB Storage, Desert Titanium)"
                                        style={{ cursor: "auto" }}
                                        width={393}
                                        height={393}

                                    />

                                </picture>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className={s['pdp-product-Thumbs']}>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            modules={[Thumbs,Navigation]}
                            watchSlidesProgress={true}
                            slidesPerView={4}
                            className={`${s['pdp-product-Thumbs-slide']} custom-slider-pdp-product`}
                        >
                        
                        {ProductImageSlide.map((slide, index) => (
                            <SwiperSlide
                                key={index}
                                className={"Thumb-swiper-slide"}
                            >
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={slide.mobImage} />
                                    <Image
                                        className={s['pdp-product-img']}
                                        src={slide.img}
                                        alt="Apple iPhone 16 Pro (128 GB Storage, Desert Titanium)"
                                        style={{ cursor: "pointer" }}
                                        width={35}
                                        height={34}
                                    />

                                </picture>
                            </SwiperSlide>
                        ))}
                           
                        </Swiper>
                    </div>


                </div>
                <div className={s["pdp-description-share"]}>
                    <img
                        src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/solar-share-linear.svg"
                        alt="solar-share"
                    />
                    <span className={s["pdp-description-share-text"]}>Share</span>
                </div>
                <div className={s["pdp-presale"]}>
                    <p className={`${s["nudge"]} ${s['black']}`}>
                        <span>Recommended</span>
                    </p>
                    <p className={`${s['nudge']} ${s['outline']}`}>500+ Bought</p>
                </div>
                <div className={s["pdp-productTitle"]}>
                    <h2>Apple iPhone 16 Pro (128 GB Storage, Desert Titanium)</h2>
                    <a href="#">Visit the Apple store</a>
                </div>
                <div className={s["pdp-variations"]}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                        necessitatibus?
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptas
                        eaque! Dolores laudantium incidunt unde, velit aut pariatur harum non
                        quaerat repellat similique deserunt porro!
                    </p>
                    <div className={s['pdp-variations-price-details']}>
                        <img
                            src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/vs-price.svg"
                            alt="loyalty-hub"
                            className={s['pdp-variations-price-details-vs-logo']}
                        />
                        <h3 className={s['pdp-variations-price-details-vs-price']}>₹1,19,300</h3>
                        <div className={s['pdp-variations-price-details-vs-price-mrp']}>
                            <p className={s['pdp-variations-price-details-vs-price-mrp-text']}>
                                MRP{" "}
                                <span>
                                    ₹1,12,900
                                </span>
                            </p>
                            <p className={s['pdp-variations-price-details-vs-price-mrp-discount-lable']}>6% off</p>
                        </div>
                        <p className={s['pdp-variations-price-details-vs-price-tax']}>(Incl. of all taxes)</p>
                    </div>

                    <div className={s['pdp-variations-loyalty-points']}>
                        <img
                            src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/loyalty-hub.svg"
                            alt="loyalty-hub"
                            className={s['pdp-variations-loyalty-points-icon']}
                        />
                        <span>
                            Earn <b>532</b> Points
                        </span>

                        <img
                            src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/info.svg"
                            alt="info"
                            className={s['pdp-variations-loyalty-points-icon-info']}
                        />
                    </div>

                    <div className={s['pdp-variations-stock-availability']}>
                        <p className={s['pdp-variations-stock-availability-label']}>
                            <img src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/check.svg" alt="check" />
                            In stock
                        </p>
                        <p className={s['pdp-variations-stock-availability-label-delivery']}>
                            <img
                                src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/delivery.svg"
                                alt="delivery"
                            />
                            Free delivery by 11 January, 2025
                        </p>
                    </div>

                    <div className={s["pdp-otherDetails"]}>
                        <button className={s['pdp-otherDetails-wishlist-like']}>
                            <img
                                src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/wishlist.svg"
                                alt="wishlist"
                                className="wishlistImg"
                            />
                        </button>

                        <div className={s['pdp-otherDetails-qty']}>
                            <div className={`${s['pdp-otherDetails-qty-inner']} ${s['test']}`}>
                                <div className={s['pdp-otherDetails-qty-inner-selected']}>1</div>
                                <div className={s['pdp-otherDetails-qty-inner-list']}>
                                    <ul className={s['pdp-otherDetails-qty-inner-list-option']} style={{ display: "none" }}>
                                        <li className={`${s['pdp-otherDetails-qty-inner-list-option-li']} ${s['test']}`}>1</li>
                                        <li className={`${s['pdp-otherDetails-qty-inner-list-option-li']}`}>2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <button
                            className={s["pdp-otherDetails-add-to-cart"]}
                        >
                            <img
                                src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/add-to-cart.svg"
                                alt="add-to-cart-icon"

                            />
                            Add to Cart
                        </button>
                        <button
                            className={s["pdp-otherDetails-buy-now"]}

                        >
                            Buy Now
                        </button>
                    </div>

                    <div className={s['pdp-variations-extra-deals']}>
                        <div className={s['pdp-variations-extra-deals-text']}>
                            <p>
                                <img
                                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/easy-installment.svg"
                                    alt="installment"
                                    className=""
                                />
                                Extra Deals Available
                            </p>
                            <Link href="#" className={s['pdp-variations-extra-deals-link']}>
                                See All
                            </Link>
                        </div>

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={9}
                            breakpoints={{
                                300: {
                                    width: 300,
                                    slidesPerView: 1.5,
                                },
                                1080: {
                                    width: 576,
                                    slidesPerView: 3,
                                },
                            }}
                            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                            className={s["pdp-variations-extra-deals-banks-parent"]}
                            pagination={{ clickable: true, dynamicBullets: true }}
                        >
                            <div className={s['pdp-variations-extra-deals-banks']}>
                                <div className={s['pdp-variations-extra-deals-banks-parent-offer-list']}>
                                    {slides.map((slide, index) => (
                                        <SwiperSlide key={index} className={s["pdp-variations-extra-deals-banks-parent-offer"]}>
                                            <div className={s['pdp-variations-extra-deals-banks-parent-offer-list-content']}>
                                                <p className={s['pdp-variations-extra-deals-banks-parent-offer-list-content-text']}>{slide.text}</p>
                                                <picture>
                                                    <source media="(max-width: 768px)" srcSet={slide.mobileSrc} />
                                                    <Image
                                                        src={slide.desktopSrc}
                                                        width={640}
                                                        height={187}
                                                        priority
                                                        loading="eager"
                                                        sizes="(max-width: 568px) 375px, (max-width: 1200px) 50vw, 100vw"
                                                        className={s['pdp-variations-extra-deals-banks-parent-offer-list-content-logo']}
                                                        alt={slide.alt}
                                                        style={{
                                                            objectFit: "contain",
                                                            width: "100%",
                                                            height: "100%",
                                                        }}
                                                    />
                                                </picture>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </div>
                        </Swiper>

                    </div>


                </div>

            </div>
            {/* <div className={s['product-details']}>
                <h2 className={s['product-details-page-specification']}>Product Specification</h2>
                <p className={s['product-details-page-specification-desc']}>Specifications Of Apple iPhone 16 Pro (128 GB Storage, Desert Titanium)</p>
            </div> */}
            {/* <div className={`${s['product-details']} ${s['additional-info']}`}>
                <h2 className={s['product-details-page-specification']}>Additional Information</h2>
                <ul className={s['product-details-page-specification-additional-info']}>
                    <li className={s['service']}>
                        <div className={s['service-title']}>
                            <div className={s['service-title-text']}>Warranty</div>
                        </div>
                        <div className={s['service-description']}>1 Year Product Warranty | 1 Year Warranty on In Box Accessories</div>
                    </li>
                </ul>
            </div> */}

            {/* Sticky cta */}

            {/* <div className={s['pdp-stickybox']}>
               <div className={s['pdp-stickybox-main']}>
               <div className={s['pdp-stickybox-main-left']}>
                    <div className={s['pdp-stickybox-main-left-pd']}>
                        <h4 className={s['pdp-stickybox-main-left-pd-title']}>
                            Apple iPhone 16 (128GB Storage, White)
                        </h4>
                    </div>
                    <div className={s['pdp-stickybox-main-left-pd-wrap']}>
                        <Image
                            src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/vs-price-white.svg"
                            alt="vsprice-icon"
                            className={s['pdp-stickybox-main-left-pd-wrap-img']}
                            width={86}
                            height={13}
                        />
                        <p className={s['pdp-stickybox-main-left-pd-wrap-amt']}> ₹73,490</p>
                    </div>
                </div>
                <div className={s['pdp-stickybox-main-right']}>
                    <div className={s['pdp-stickybox-main-right-cta']}>
                        <button
                            className={s['pdp-stickybox-main-right-cta-addCart']}
                            data-id="add-to-cart"
                            style={{}}
                        >
                            <img
                                src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/add-to-cart.svg"
                                className={s['pdp-stickybox-main-right-cta-addCart-img']}
                            />
                            Add to Cart
                        </button>
                        <button className={s['pdp-stickybox-main-right-cta-buyNow']}> Buy Now</button>
                    </div>
                </div>
               </div>
            </div> */}


        </>
    );
}
