import React from "react";
import s from "./ProductCartCard.module.scss";
import Image from "next/image";
const ProductCartCard = () => {
  return (
    <>
      <div className={s["cardDesc"]}>
        <div className={s["cardDesc-card"]}>
          <div className={s["cardDesc-card-wrap"]}>
            <div className={s["cardDesc-card-wrap-product"]}>
              <div className={s["cardDesc-card-wrap-product-left"]}>
                <div className={s["cardDesc-card-wrap-product-left-checkbox"]}>
                  <input
                    type="checkbox"
                    name="cartProductCheckbox"
                    className={
                      s["cardDesc-card-wrap-product-left-checkbox-input"]
                    }
                  />
                </div>
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={
                      "https://vsprod.vijaysales.com/media/catalog/product/2/3/232286-image.jpg?optimize=medium&fit=bounds&height=&width="
                    }
                  />
                  <Image
                    className={s["cardDesc-card-wrap-product-left-img"]}
                    src={
                      "https://vsprod.vijaysales.com/media/catalog/product/2/3/232286-image.jpg?optimize=medium&fit=bounds&height=&width="
                    }
                    alt="Apple iPhone 16 Pro (128 GB Storage, Desert Titanium)"
                    style={{ cursor: "auto" }}
                    width={393}
                    height={393}
                  />
                </picture>
              </div>
              <div className={s["cardDesc-card-wrap-product-right"]}>
                <div className={s["cardDesc-card-wrap-product-right-title"]}>
                  <h5
                    className={s["cardDesc-card-wrap-product-right-title-desc"]}
                  >
                    Apple iPhone 16 (128GB Storage, White)
                  </h5>
                </div>
                <div className={s["cardDesc-card-wrap-product-right-qty"]}>
                  <div
                    className={`${s["cardDesc-card-wrap-product-right-qty-inner"]} ${s["test"]}`}
                  >
                    <div
                      className={
                        s["cardDesc-card-wrap-product-right-qty-inner-selected"]
                      }
                    >
                      1
                    </div>
                    <div
                      className={
                        s["cardDesc-card-wrap-product-right-qty-inner-list"]
                      }
                    >
                      <ul
                        className={
                          s[
                            "cardDesc-card-wrap-product-right-qty-inner-list-option"
                          ]
                        }
                        style={{ display: "none" }}
                      >
                        <li
                          className={`${s["cardDesc-card-wrap-product-right-qty-inner-list-option-li"]} ${s["test"]}`}
                        >
                          1
                        </li>
                        <li
                          className={`${s["cardDesc-card-wrap-product-right-qty-inner-list-option-li"]}`}
                        >
                          2
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={s["cardDesc-card-wrap-product-right-price"]}>
                  <p
                    className={s["cardDesc-card-wrap-product-right-price-amt"]}
                  >
                    ₹73,490
                  </p>
                  <div
                    className={
                      s["cardDesc-card-wrap-product-right-price-discount"]
                    }
                  >
                    <p
                      className={
                        s["cardDesc-card-wrap-product-right-price-discount-amt"]
                      }
                    >
                      MRP{" "}
                      <span
                        className={
                          s[
                            "cardDesc-card-wrap-product-right-price-discount-amt-strikeoff"
                          ]
                        }
                      >
                        ₹79,900
                      </span>
                    </p>
                    <p
                      className={
                        s[
                          "cardDesc-card-wrap-product-right-price-discount-percentage"
                        ]
                      }
                    >
                      8% Off
                    </p>
                  </div>
                  <div
                    className={
                      s["cardDesc-card-wrap-product-right-price-reward"]
                    }
                  >
                    <img
                      src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/cart-checkout/reward.svg"
                      className={
                        s["cardDesc-card-wrap-product-right-price-reward-icon"]
                      }
                      alt="reward-icon"
                    />
                    <p
                      className={
                        s[
                          "cardDesc-card-wrap-product-right-price-reward-content"
                        ]
                      }
                    >
                      Earn{" "}
                      <span
                        className={
                          s[
                            "cardDesc-card-wrap-product-right-price-reward-content-text"
                          ]
                        }
                      >
                        1102
                      </span>{" "}
                      loyalty points on this product
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s["cardDesc-card-wrap-points"]}>
              <div className={s["cardDesc-card-wrap-points-loyalty-points"]}>
                <div
                  className={
                    s["cardDesc-card-wrap-points-loyalty-points-wishlist"]
                  }
                >
                  <div
                    className={
                      s[
                        "cardDesc-card-wrap-points-loyalty-points-wishlist-left"
                      ]
                    }
                  >
                    <img
                      src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/cart-checkout/Wishlist.svg"
                      className={
                        s[
                          "cardDesc-card-wrap-points-loyalty-points-wishlist-left-move-to-wishlist"
                        ]
                      }
                      alt="wishlist-icon"
                    />
                    <div
                      className={
                        s[
                          "cardDesc-card-wrap-points-loyalty-points-wishlist-left-move-content"
                        ]
                      }
                    >
                      Move to wishlist
                    </div>
                  </div>
                  <div className={s["separator"]} />
                  <div
                    className={
                      s[
                        "cardDesc-card-wrap-points-loyalty-points-wishlist-right"
                      ]
                    }
                  >
                    <img
                      src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/cart-checkout/Trash.svg"
                      className={
                        s[
                          "cardDesc-card-wrap-points-loyalty-points-wishlist-right-delete-to-wishlist"
                        ]
                      }
                      alt="trash"
                    />
                    <div
                      className={
                        s[
                          "cardDesc-card-wrap-points-loyalty-points-wishlist-right-delete"
                        ]
                      }
                    >
                      Remove
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s["cardDesc-card-wrap-description"]}>
              <div
                className={s["cardDesc-card-wrap-description-delivery-radio"]}
              >
                <label>
                  <input type="radio" value="option1" />
                  <span className={s["custom-radio"]} />
                </label>
                <div
                  className={
                    s[
                      "cardDesc-card-wrap-description-delivery-radio-delivery-text"
                    ]
                  }
                >
                  <p
                    className={
                      s[
                        "cardDesc-card-wrap-description-delivery-radio-delivery-text-delivery-title"
                      ]
                    }
                  >
                    Express Delivery{" "}
                  </p>
                  <p
                    className={
                      s[
                        "cardDesc-card-wrap-description-delivery-radio-delivery-text-delivery-title-delivery-description"
                      ]
                    }
                  >
                    <span
                      className={
                        s[
                          "cardDesc-card-wrap-description-delivery-radio-delivery-text-delivery-title-delivery-deadline"
                        ]
                      }
                    >
                      Free delivery by Tomorrow, 2 PM
                    </span>
                  </p>
                </div>
              </div>
              <div className={s["cardDesc-card-wrap-description-pick-up"]}>
                <label>
                  <input
                    type="radio"
                    name="delivery582236939692"
                    value="option1"
                  />
                  <span className={s["custom-radio"]} />
                </label>
                <div
                  className={s["cardDesc-card-wrap-description-pick-up-text"]}
                >
                  <p>Pickup Available</p>
                  <h6
                    className={
                      s[
                        "cardDesc-card-wrap-description-pick-up-text-store-address"
                      ]
                    }
                  >
                    BUSINESS SQUARE, A-WING GR FLR. OPP KANAKIA WALL STREET
                    ANDHERI-KURLA ROAD, CHAKALA, ANDHERI EAST, MUMBAI
                  </h6>
                  <h6
                    className={
                      s[
                        "cardDesc-card-wrap-description-pick-up-text-store-address"
                      ]
                    }
                  >
                    <span> ~5km</span> away from your location
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCartCard;
