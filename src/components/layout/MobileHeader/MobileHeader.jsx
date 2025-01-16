"use client";
import React, { useState } from "react";
import s from "./MobileHeader.module.scss";
import Link from "next/link";

const MobileHeader = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isCategoryMenuListOpen, setisCategoryMenuListOpen] = useState(false);

  function handleMenuOpen() {
    setisOpen(!isOpen);
  }

  function handleCategoryMenuOpen() {
    setisCategoryMenuListOpen(!isCategoryMenuListOpen);
  }

  return (
    <div>
      <header className={`${s["vs-mob-head"]} ${s["header"]}`}>
        <div className={s["vs-mob-head-l1"]}>
          <div className={s["vs-mob-head-l1-left"]}>
            <div
              className={`${s["vs-mob-head-l1-left-hamburger-menu"]} ${
                isCategoryMenuListOpen ? s["active"] : ""
              }`}
              onClick={handleCategoryMenuOpen}
            >
              <div
                className={`${s["custom-hamburger"]} ${
                  isCategoryMenuListOpen ? s["active"] : ""
                }`}
              >
                <span className={`${s["bar"]} ${s["bar1"]}`} />
                <span className={`${s["bar"]} ${s["bar2"]}`} />
                <span className={`${s["bar"]} ${s["bar3"]}`} />
                <span className={`${s["bar"]} ${s["bar4"]}`} />
              </div>
            </div>
            <div
              className={`${s["vs-mob-head-l1-left-logo"]} ${
                isCategoryMenuListOpen ? s["hamburger-active"] : ""
              } ${isCategoryMenuListOpen ? s["d-none"] : ""} `}
            >
              <Link href="/">
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/vs-logo.svg"
                  alt="vs-logo-img"
                />
              </Link>
            </div>
            <div className={`${s["vs-mob-head-l1-left-back"]} ${s["d-none"]}`}>
              <img
                src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/back-arrow.svg"
                alt="back-arrow-icon"
              />
            </div>
          </div>
          <div
            className={`${s["vs-mob-head-l1-right"]} ${
              isCategoryMenuListOpen ? s["d-none"] : ""
            }`}
          >
            <div className={s["vs-mob-head-l1-right-profile"]}>
              <a
                href="/login"
                className={`${s["vs-mob-head-l1-right-profile-pre-login"]} ${s["d-block"]}`}
                data-jsname="pre-login"
              >
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/prelogin-icon.svg"
                  alt="prelogin-icon"
                />
              </a>
              <div
                className={`${s["vs-mob-head-l1-right-profile-post-login"]} ${s["d-none"]}`}
              >
                <a
                  href="/profile-page/overview"
                  className={
                    s["vs-mob-head-l1-right-profile-post-login-username"]
                  }
                  data-jsname="post-login"
                >
                  <div>
                    <p>NS</p>
                  </div>
                </a>
                <div
                  className={`${s["vs-mob-head-l1-right-profile-post-login-wrapper"]} ${s["d-none"]}`}
                  data-jsname="post-login-wrapper"
                >
                  <h3>
                    Hello <span>Neha</span>!
                  </h3>
                  <div
                    className={
                      s[
                        "vs-mob-head-l1-right-profile-post-login-wrapper-points"
                      ]
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
                  <a
                    href="/content/vijaysaleswebsite/us/en"
                    data-jsname="logoutBtn"
                    className={
                      s[
                        "vs-mob-head-l1-right-profile-post-login-wrapper-logout-btn"
                      ]
                    }
                  >
                    <img alt="logout-icon" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <div className={s["vs-mob-head-l1-right-cart"]}>
              <Link href="/cart">
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/cart.svg"
                  alt="cart-icon"
                />
                <span className="">3</span>
              </Link>
            </div>
            <div
              className={`${s["vs-mob-head-l1-right-close"]} ${s["d-none"]}`}
            >
              <img
                src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/close-icon.svg"
                alt="close-icon"
              />
            </div>
          </div>
        </div>
        <div className={s["vs-mob-head-l2"]}>
          <form action="">
            <img
              src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/search.svg"
              alt="search-icon"
            />
            <input
              type="text"
              placeholder="Search for phone, TV, home appliances..."
            />
            <a href="#">
              <img
                src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/voice.svg"
                alt="mic-icon"
                className={s["mobsearchbar__micIconHeader"]}
              />
            </a>
          </form>
        </div>

        <div className={s["vs-mob-head-l3"]}>
          <div className={s["vs-mob-head-l3-home-delivery"]}>
            <img
              src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/location.svg"
              className={s["vs-mob-head-l3-home-delivery-icon"]}
              alt="locate-icon"
            />
            <p>
              <span data-pincode={400060}>Mumbai 400060</span>
              <a href="#">Change Location</a>
            </p>
          </div>
        </div>
      </header>

      <section
        className={`${s["vs-mob-head"]} ${s["vs-mob-flyout-menu"]} ${
          s["header"]
        } ${isCategoryMenuListOpen ? s["active"] : ""}`}
      >
        <div className={s["vs-mob-head-filters"]}>
          <div
            className={`${s["vs-mob-head-filters-l1"]} ${
              isCategoryMenuListOpen ? s["active"] : ""
            }`}
            style={{ top: 0 }}
          >
            <div className={s["vs-mob-head-filters-l1-top"]}>
              <ul>
                <li>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/store-locator.svg"
                    alt="Store Locator icon"
                  />
                  <a href="/store-locator">Store Locator</a>
                </li>
                <li>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/help-center.svg"
                    alt="Help Center icon"
                  />
                  <a href="/contact-us">Help Center</a>
                </li>
              </ul>
            </div>
            <div className={s["vs-mob-head-filters-l1-middle"]}>
              <ul>
                <li
                  data-tabid="mobiles"
                  className={s["vs-mob-head-l1-link"]}
                  onClick={handleMenuOpen}
                >
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/mob-tab.svg"
                    alt="Mobiles, Tablets & Accessories icon"
                  />
                  <a href="/c/mobiles-tablets-and-accessories">
                    Mobiles, Tablets &amp; Accessories
                  </a>
                </li>
                <li className={s["vs-mob-head-l1-link"]}>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/laptops.svg"
                    alt="Laptops & Accessories icon"
                  />
                  <a href="/c/laptops-and-accessories">
                    Laptops &amp; Accessories
                  </a>
                </li>
                <li
                  data-tabid="mobile-tablet"
                  className={s["vs-mob-head-l1-link"]}
                >
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/home-kitchen.svg"
                    alt="Home Appliances icon"
                  />
                  <a href="/c/home-appliances">Home Appliances</a>
                </li>
                <li data-tabid="laptop" className={s["vs-mob-head-l1-link"]}>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/kitchen-appliances.svg"
                    alt="Kitchen Appliances icon"
                  />
                  <a href="/c/kitchen-appliances">Kitchen Appliances</a>
                </li>
                <li data-tabid="gaming" className={s["vs-mob-head-l1-link"]}>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/tv-entertainment.svg"
                    alt="TV & Entertainment icon"
                  />
                  <a href="/c/television-and-entertainment">
                    TV &amp; Entertainment
                  </a>
                </li>
                <li
                  data-tabid="home-kitchen"
                  className={s["vs-mob-head-l1-link"]}
                >
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/personal-care.svg"
                    alt="Grooming & Fitness icon"
                  />
                  <a href="/c/grooming-and-fitness">Grooming &amp; Fitness</a>
                </li>
                <li data-tabid="camera" className={s["vs-mob-head-l1-link"]}>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/headphone-and-speaker.svg"
                    alt="Headphones & Speakers icon"
                  />
                  <a href="/c/headphones-and-speakers">
                    Headphones &amp; Speakers
                  </a>
                </li>
                <li
                  data-tabid="brand-stores"
                  className={s["vs-mob-head-l1-link"]}
                >
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/brand-store.svg"
                    alt="Brand Stores icon"
                  />
                  <a href="/brands">Brand Stores</a>
                </li>
                <li data-hide-desk="true" className={s["d-none"]}>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/loyalty-points.svg"
                    alt="Loyalty Hub icon"
                  />
                  <a href="/loyalty">Loyalty Hub</a>
                </li>
              </ul>
            </div>
            <div className={s["vs-mob-head-filters-l1-bottom"]}>
              <ul>
                <li>
                  <a href="/about-us">About Vijay Sales</a>
                </li>
                <li>
                  <a href="/faqs">Help Center</a>
                </li>
                <li>
                  <a href="/faqs">Terms of Use</a>
                </li>
              </ul>
            </div>
            <div className={s["vs-mob-head-filters-l1-social"]}>
              <a href="https://api.whatsapp.com/send?phone=917045926060&text=Hello">
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/whatsapp.svg"
                  alt="social-icon"
                />
              </a>
              <a href="https://www.facebook.com/VijaySales/">
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/header-facebook.svg"
                  alt="social-icon"
                />
              </a>
              <a href="https://x.com/VijaySales">
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/header-twitter.svg"
                  alt="social-icon"
                />
              </a>
              <a href="https://www.instagram.com/vijaysalesofficial/">
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/header-instagram.svg"
                  alt="social-icon"
                />
              </a>
              <a href="https://www.youtube.com/user/vijaysalesstore">
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/header-youtube.svg"
                  alt="social-icon"
                />
              </a>
              <a href="https://in.linkedin.com/company/vijaysales">
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/images/header-linkedin.svg"
                  alt="social-icon"
                />
              </a>
            </div>
            <div className={s["vs-mob-head-filters-l1-copyrights"]}>
              <p>vijaysales.com © 2024</p>
            </div>
          </div>

          <div
            className={`${s["vs-mob-head-filters-l2"]} ${
              isOpen ? s["active"] : ""
            }`}
            style={{ top: "-100px" }}
          >
            <div className={s["vs-mob-head-filters-l2-title"]}>
              <h3>Mobiles, Tablets &amp; Accessories</h3>
            </div>
            <div
              className={s["vs-mob-head-filters-l2-wrapper"]}
              data-tabid="mobiles"
            >
              <a href="/product-listing-page" />
              <ul>
                <li data-tabid="smartphone">
                  <a href="/c/smartphones">Smartphone</a>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/half-arrow.svg"
                    alt="Smartphone Icon"
                  />
                </li>
                <li data-tabid="iphone">
                  <a href="/c/iphones">iPhone</a>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/half-arrow.svg"
                    alt="iPhone Icon"
                  />
                </li>
                <li data-tabid="basic-phone">
                  <a href="/c/basic-phones">Basic Phone</a>
                </li>
                <li data-tabid="tablets">
                  <a href="/c/tablets">Tablets</a>
                </li>
                <li data-tabid="ipad">
                  <a href="/c/ipads">iPad</a>
                </li>
                <li data-tabid="graphic-tablet">
                  <a href="/c/graphic-tablets">Graphic Tablet</a>
                </li>
                <li data-tabid="power-bank">
                  <a href="/c/power-bank">Power Bank</a>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/half-arrow.svg"
                    alt="Power Bank Icon"
                  />
                </li>
                <li data-tabid="adapter">
                  <a href="/c/adapters">Adapter</a>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/half-arrow.svg"
                    alt="Adapter Icon"
                  />
                </li>
                <li data-tabid="cable">
                  <a href="/c/cables">Cable</a>
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/vs-header/half-arrow.svg"
                    alt="Cable Icon"
                  />
                </li>
                <li data-tabid="cases-and-cover">
                  <a href="/c/cases-and-covers">Cases and Cover</a>
                </li>
              </ul>

              <div className={s["vs-mob-head-filters-l2-wrapper-menu-banner"]}>
                <div
                  className={
                    s["vs-mob-head-filters-l2-wrapper-menu-banner-img"]
                  }
                >
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/navigation-card/25-11-24/Treding%20Smartphones%20(Mobile).jpg"
                    alt="Smartphone Icon"
                  />
                </div>
                <div
                  className={
                    s["vs-mob-head-filters-l2-wrapper-menu-banner-img"]
                  }
                >
                  <img
                    src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/header/navigation-card/25-11-24/Upgrade to New iPhone (Mobile)_.jpg"
                    alt="Smartphone Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileHeader;
