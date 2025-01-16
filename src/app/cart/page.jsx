import React from 'react'
import ProductCartCard from '@/components/ui/ProductCartCard'
import s from './page.module.scss';
import Link from 'next/link';

const title = "test";

export const metadata = {
  title: `Cart ${title}`,
  description: "Electronics shop: Choose from a wide range of mobiles, washing machine, camera, laptop &amp; many more from the top brands &amp; get exciting deals &amp; offers only at Vijay Sales.",
};
const page = () => {
  return (
    <>
      <div className={`${"vs-container"} ${s['cartPage']}`}>
        <h1 className={s['cartPage-title']}>Cart <span className={s['cartPage-title-number']}>(6)</span></h1>
        <div className={s['cartPage-main']}>
          <ProductCartCard />
          <div className={s['cartPage-main-order']}>
            <div className={s['cartPage-main-order-coupon']}>
              <div className={s['cartPage-main-order-coupon-parent']}>
                <img className={s['cartPage-main-order-coupon-parent-code-icon']} src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/cart-checkout/coupon-code.svg" alt="icon" />
                <p className={`${s['cartPage-main-order-coupon-parent-text']} ${'test'}`}> Apply Coupon Code </p>
                <p className={`${s['cartPage-main-order-coupon-parent-text']} ${'d-none'}`}> Coupon Applied </p>
                <span className={`${s['cartPage-main-order-coupon-parent-exchange-strip']} ${'d-none'}`}>EXCHANGE1000TV</span>
              </div>
              <div className={`${s['cartPage-main-order-coupon-icon']}`}>
                  <img className={`${s['cartPage-main-order-coupon-icon-img']} ${'d-none'}`} id="apply-coupon-cross" src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/icons/cross.svg" alt="cross"/>
                  <img className={`${s['cartPage-main-order-coupon-icon-img']} `}  id="apply-coupon-tick" src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/cart-checkout/ChevronRight.svg" alt="cross"  />
              </div>
            </div>
            <div className={s['cartPage-main-order-summary']}>
              <div className={s['cartPage-main-order-summary-container']}>
                <h6 className={s['cartPage-main-order-summary-container-title']}>order summary</h6>
                <div className={s['cartPage-main-order-summary-container-cart-table']}>
                    <div className={s["cartPage-main-order-summary-container-cart-table-amount-price"]}>
                      <p className={s['cartPage-main-order-summary-container-cart-table-amount-price-text']}>
                        <span>Price</span> (
                        <span>6 items</span>)
                      </p>
                      <div className={s['cartPage-main-order-summary-container-cart-table-amount-price-amt']}>
                        <p className={s['cartPage-main-order-summary-container-cart-table-amount-price-amt-strikeoff']}>₹ 3,64,598</p>
                        <p className={s['cartPage-main-order-summary-container-cart-table-amount-price-amt-vs-price']}> ₹ 3,25,859 </p>
                      </div>
                    </div>
                    <div className={s["cartPage-main-order-summary-container-cart-table-amount-price"]}>
                      <p className={`${s['cartPage-main-order-summary-container-cart-table-amount-price-text']} ${s['freetag']}`}>
                        Delivery Charges{" "}
                      </p>
                      <p className={s['cartPage-main-order-summary-container-cart-table-amount-price-amt-vs-price']}>
                        <span className={s['cartPage-main-order-summary-container-cart-table-amount-price-amt-strikeoff']}>
                          ₹ 750
                        </span>
                      </p>
                    </div>
                </div>
                <div className={s['cartPage-main-order-summary-saving']}>
                  <div className={s['cartPage-main-order-summary-saving-wrapper']}>
                    <img src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/cart-checkout/savings.png" alt="icon" />
                    <p > You will save </p>
                    <p className={s['cartPage-main-order-summary-saving-wrapper-amt']}>₹ 38,739</p>
                    <span> on this order </span>
                  </div>
                </div>
                <div className={s['cartPage-main-order-summary-total']}>
                  <p className={s['cartPage-main-order-summary-total-txt']}>
                    {" "}
                    To Pay
                  </p>
                  <p className={s['cartPage-main-order-summary-total-amt']}>
                    <span className={s['cartPage-main-order-summary-total-amt-digit']}> ₹ 3,25,859</span>
                    <span className={s['cartPage-main-order-summary-total-amt-txt']}>(Incl. of all taxes)</span>
                  </p>
                </div>

              </div>
            </div>
            <div className={s['cartPage-main-order-location']}>
              <div className={s['cartPage-main-order-location-wrap']}>
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/cart-checkout/location-pin.svg"
                  alt="icon"
                />
                <div className={s['cartPage-main-order-location-wrap-content']}>
                  <p>
                    {"Deliver to "}
                    <span className={s['cartPage-main-order-location-wrap-content-txt']}>
                      {"Mumbai 400060 "}
                    </span>
                    <a href="#">Change Location</a>
                  </p>
                </div>
              </div>
            </div>
            <div className={s['cartPage-main-order-gst-title']}>
              <label htmlFor="acknowledgement" className={s['cartPage-main-order-gst-title-label']}>
                I have a GST Number{" "}
                <span className={s['cartPage-main-order-gst-title-label-inner']}>(If applicable)</span>
              </label>
            </div>
            <div className={s['cartPage-main-order-gst-input']}>
              <input type="text" name="gst_no" id="gst_no" placeholder=" " />
              <label htmlFor="gst_no" className={s['cartPage-main-order-gst-input-label']}>
                GST Number
              </label>
              <button className={s['cartPage-main-order-gst-input-btn']}>Apply</button>
              <button className={`${s['cartPage-main-order-gst-input-btn']} ${'d-none'}`}>Clear</button>
            </div>
            <p className={`${s['cartPage-main-order-gst-error']} ${s['text']}`}>
            {/* Please add a valid GST number */}
            </p>
            <div className={s['cartPage-main-order-checkout-btn']}>
              <div className={s['cartPage-main-order-checkout-btn-inner']}>
                <Link href="#">Proceed to Checkout</Link>
              </div>
            </div>
            <div className={s['cartPage-main-order-safe-payment']}>
              <div className={s['cartPage-main-order-safe-payment-wrap']}>
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/cart-checkout/warranty-card.svg"
                  alt="card-icon"
                />
                <p className={s['cartPage-main-order-safe-payment-wrap-text']}>
                  Safe and Secure Payment. 100% Authentic products.
                </p>
              </div>
              <div className={s['divider']}></div>
              <div className={s['cartPage-main-order-safe-years']}>
                <img
                  src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/cart-checkout/warranty-card.svg"
                  alt="trust-icon"
                />
                <p className={s['cartPage-main-order-safe-years-digit']}>57 years of trust</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default page