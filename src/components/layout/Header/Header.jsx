"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import s from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "hooks/useMediaQuery";
import MobileHeader from "../MobileHeader";
import getPincodeDetails from "services/getPincodeDetails";
import { headerData } from "constants/header";

const url =
  "https://www.vijaysales.com/content/experience-fragments/vijaysaleswebsite/in/en/header/header-sections/tv-and-entertainment/master/_jcr_content/root/vscontainer_17041462/vscontainer/vscontainer_copy/vscontainer/vscontainer/vsimage_copy_copy.coreimg.jpeg/1732619193037/big-screen-big-savings--desktop-.jpeg";

const Header = ({ isMobile }) => {
  const isMobileDevice = useMediaQuery("(max-width:768px)", isMobile);
  const [subMenu, setSubMenu] = useState(false);
  const [active, setActive] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [pincode, setPincode] = useState({});
  const subMenuRef = useRef(null);

  const subMenuOptions = useMemo(() => {
    if (active) {
      let data = headerData.find((ele) => ele.value === active);
      return data.submenu ?? [];
    }
  }, [active]);

  const subCategoryOptions = useMemo(() => {
    if (subCategory) {
      let data = headerData.find((ele) => ele.value === active);
      let newData = data.submenu.find((ele) => ele.value === subCategory);
      return newData.submenu ?? [];
    }
  }, [subCategory]);

  // useEffect(() => {
  //   (async () => {
  //     let pincodeData = await getPincodeDetails({ pincode: 400097 });
  //     setPincode(pincodeData[0]);
  //   })();
  // }, []);

  function handleSubMenu(e, id) {
    setActive(id);
    setSubCategory("");
    setSubMenu(() => true);
  }

  function closeSubMenu(e, id) {
    setSubMenu(() => false);
    setActive("");
  }

  if (isMobileDevice) {
    return <MobileHeader />;
  }

  return (
    <>
      <div className={`${s["overlay"]} ${subMenu ? s["active"] : ""}`}></div>

      <header className={`${s["vs-head-wrapper"]} ${s["header"]}`}>
        <section className={s["vs-head"]}>
          <div onMouseEnter={() => closeSubMenu()} className={s["vs-head-pri"]}>
            <div className={s["vs-head-pri-logo"]}>
              <Link href="/">
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/vs-logo.svg"
                  alt="vs-logo-img"
                />
              </Link>
            </div>
            <div className={s["vs-head-pri-home-delivery"]}>
              <Image
                height={24}
                width={24}
                src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/location.svg"
                className={s["vs-head-pri-home-delivery-icon"]}
                alt="locate-icon"
              />
              <p>
                {pincode.pincode ? (
                  <span>
                    {pincode.cityname} {pincode.pincode}
                  </span>
                ) : (
                  <span>Deliver to</span>
                )}
                <Link href="#">Change Location</Link>
              </p>
            </div>
            <div className={s["vs-head-pri-search"]}>
              <form action="">
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/search.svg"
                  alt="search-icon"
                />
                <input
                  type="text"
                  placeholder="Search for phone, TV, home appliances..."
                  readOnly=""
                />
              </form>
            </div>
            <div className={s["vs-head-pri-links"]}>
              <ul>
                <li>
                  <Image
                    height={24}
                    width={24}
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/store-locator.svg"
                    alt="Store Locator icon"
                  />
                  <Link href="/#">Store Locator</Link>
                </li>
                <li>
                  <Image
                    height={24}
                    width={24}
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/help-center.svg"
                    alt="Help Center icon"
                  />
                  <Link href="/#">Help Center</Link>
                </li>
              </ul>
            </div>
            <div className={s["vs-head-pri-wishlist"]}>
              <Link href="/profile-page/wishlist" data-jsname="header-wishlist">
                <Image
                  height={24}
                  width={24}
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/wishlist-icon-empty.svg"
                  alt="wishlist-empty-icon"
                  className={s["vs-head-pri-wishlist-empty"]}
                />
                <Image
                  height={24}
                  width={24}
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/wishlist-icon-filled.svg"
                  alt="wishlist-filled-icon"
                  className={s["vs-head-pri-wishlist-filled"]}
                />
              </Link>
            </div>
            <div className={s["vs-head-pri-profile"]}>
              <Link
                href="/#"
                className={s["vs-head-pri-profile-post-login-wrapper-points"]}
              >
                <Image
                  height={24}
                  width={24}
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/prelogin-icon.svg"
                  alt="prelogin-icon"
                />
              </Link>
              {/* <div
                className={`${s["vs-head-pri-profile-post-login"]} ${s["d-none"]}`}
              >
                <div className={s["vs-head-pri-profile-post-login-username"]}>
                  <div>
                    <p>NS</p>
                  </div>
                </div>
                <div
                  className={`${s["vs-head-pri-profile-post-login-wrapper"]} ${s["d-none"]}`}
                >
                  <h3>
                    Hello <span>Neha</span>!
                  </h3>
                  <div
                    className={
                      s["vs-head-pri-profile-post-login-wrapper-points"]
                    }
                  >
                    <img
                      src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/loyalty-points.svg"
                      alt="loyalty-points-icons"
                    />
                    <p>
                      <span data-jsname="pointsValue" /> Points
                    </p>
                  </div>
                  <ul>
                    <li>
                      <img
                        src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/overview.svg"
                        alt="Overview icon"
                      />
                      <a href="/profile-page/overview">Overview</a>
                    </li>
                    <li>
                      <img
                        src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/orders.svg"
                        alt="My Orders icon"
                      />
                      <a href="/profile-page/my-order">My Orders</a>
                    </li>
                    <li>
                      <img
                        src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/prelogin-icon.svg"
                        alt="Personal Details icon"
                      />
                      <a href="/profile-page/personal-details">
                        Personal Details
                      </a>
                    </li>
                    <li>
                      <img
                        src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/location.svg"
                        alt="Manage Addresses icon"
                      />
                      <a href="/profile-page/manage-addresses">
                        Manage Addresses
                      </a>
                    </li>
                    <li>
                      <img
                        src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/preferences.svg"
                        alt="Preferences icon"
                      />
                      <a href="/profile-page/preferences">Preferences</a>
                    </li>
                    <li>
                      <img
                        src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/loyalty-points.svg"
                        alt="My Loyalty Points icon"
                      />
                      <a href="/profile-page/my-loyalty-points">
                        My Loyalty Points
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className={s["vs-head-pri-cart"]}>
              <Link href="/cart">
                <Image
                  height={24}
                  width={24}
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/cart.svg"
                  alt="cart-icon"
                />
                <span>3</span>
              </Link>
            </div>
          </div>
          <div className={s["vs-head-sec"]}>
            <div className={s["vs-head-sec-l1"]}>
              <ul id="vs-head-sec-ul">
                {headerData.map((ele) => (
                  <li
                    onMouseEnter={(e) => {
                      handleSubMenu(e, ele.value);
                    }}
                    // onMouseLeave={(e) => {
                    //   closeSubMenu(e);
                    // }}
                    key={ele.value}
                    id={ele.value}
                    className={`${s["vs-head-sec-l1-container"]} ${
                      ele.value === active ? s["active"] : ""
                    } `}
                  >
                    <Link href="/#">{ele.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </header>

      <section
        onMouseLeave={(e) => {
          closeSubMenu(e);
        }}
        id="submenu"
        ref={subMenuRef}
        className={`${s["vs-head-wrapper-sec"] ?? ""} ${s["header"]}`}
      >
        <div
          className={`${s["vs-head-wrapper-sec-flyout-menu"]} ${
            subMenu ? s["active"] : ""
          }`}
        >
          <div className={s["vs-head-wrapper-sec-flyout-menu-container"]}>
            <div
              className={
                s["vs-head-wrapper-sec-flyout-menu-container-sub-category"]
              }
            >
              <div
                className={
                  s[
                    "vs-head-wrapper-sec-flyout-menu-container-sub-category-list"
                  ]
                }
              >
                {/* <Link
                  href="/product-listing-page"
                  className={
                    s[
                      "vs-head-wrapper-sec-flyout-menu-container-sub-category-list-link"
                    ]
                  }
                /> */}
                <ul>
                  {subMenuOptions?.map((ele) => (
                    <li
                      onMouseEnter={() => setSubCategory(ele.value)}
                      key={ele.value}
                      className={`${s["vs-head-wrapper-sec-flyout-menu-container-sub-category-list-link-li"]} ${s["test"]}`}
                    >
                      <Link href="/#">{ele.label}</Link>
                      {/* <img
                        src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/half-arrow.svg"
                        alt="Smartphone Icon"
                      /> */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={s["vs-head-wrapper-sec-flyout-menu-container-inner"]}
            >
              <div
                className={
                  s["vs-head-wrapper-sec-flyout-menu-container-inner-filter"]
                }
              >
                <div
                  className={
                    s[
                      "vs-head-wrapper-sec-flyout-menu-container-inner-filter-wrapper"
                    ]
                  }
                  data-tabid="smartphone"
                >
                  <div
                    className={
                      s[
                        "vs-head-wrapper-sec-flyout-menu-container-inner-filter-wrapper-parent"
                      ]
                    }
                  >
                    <div
                      className={
                        s[
                          "vs-head-wrapper-sec-flyout-menu-container-inner-filter-wrapper-parent-sub"
                        ]
                      }
                    >
                      {subCategoryOptions?.map((ele) => (
                        <div
                          key={ele.value}
                          className={
                            s[
                              "vs-head-wrapper-sec-flyout-menu-container-inner-filter-wrapper-parent-sub-links"
                            ]
                          }
                        >
                          <Link
                            href="#"
                            className={
                              s[
                                "vs-head-wrapper-sec-flyout-menu-container-inner-filter-wrapper-parent-sub-links-list"
                              ]
                            }
                          >
                            {ele.label}
                            <Image
                              height={6}
                              width={11}
                              src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/half-arrow.svg"
                              alt="arrow-icon"
                            />
                          </Link>
                          <ul className={s["test"]}>
                            <li>
                              <a href="/c/smartphones?brand=Samsung">Samsung</a>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  s[
                    "vs-head-wrapper-sec-flyout-menu-container-inner-feature-image"
                  ]
                }
              >
                <div className={s["image"]}>
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/navigation-card/25-11-24/Treding%20Smartphones%20(Mobile).jpg"
                    />
                    <Image
                      src={`https://www.vijaysales.com/content/experience-fragments/vijaysaleswebsite/in/en/header/header-sections/mobile-tablets-and-accessories/master/_jcr_content/root/vscontainer_1704146228/vscontainer/vscontainer/vscontainer/vscontainer/vsimage.coreimg.jpeg/1732617562026/treding-smartphones--desktop-.jpeg`}
                      height={292}
                      width={320}
                      alt="image"
                    />
                  </picture>
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/navigation-card/25-11-24/Treding%20Smartphones%20(Mobile).jpg"
                    />
                    <Image
                      src={`https://www.vijaysales.com/content/experience-fragments/vijaysaleswebsite/in/en/header/header-sections/mobile-tablets-and-accessories/master/_jcr_content/root/vscontainer_1704146228/vscontainer/vscontainer/vscontainer/vscontainer/vsimage.coreimg.jpeg/1732617562026/treding-smartphones--desktop-.jpeg`}
                      height={292}
                      width={320}
                      alt="img-2-banner-sm"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
