import Image from "next/image";
import FooterLinks from "@/components/ui/FooterLinks";
import styles from "./Footer.module.scss";

export default function Footer() {
  const airConditioners = [
    "Vise ACs",
    "Voltas ACs",
    "Daikin ACs",
    "LG ACs",
    "Bluestar ACs",
    "Godrej ACs",
    "Mitsubishi ACs",
    "Carrier ACs",
    "Hitachi ACs",
    "Panasonic ACs",
    "Samsung ACs",
    "Haier ACs",
    "Ogeneral ACs",
  ];

  const televisions = [
    "Sony TVs",
    "Samsung TVs",
    "LG TVs",
    "Panasonic TVs",
    "TCL TVs",
    "Smart TVs",
    "4K TVs",
    "OLED TVs",
    "QLED TVs",
  ];

  const paymentGatewaylinks = [
    {
      mobileSrc:
        "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/footer/card-icons/visa-mobile.png",
      src: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/footer/card-icons/visa.png",
      alt: "visa",
    },
    {
      mobileSrc:
        "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/footer/card-icons/amex-mobile.png",
      src: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/footer/card-icons/amex.png",
      alt: "amex",
    },
    {
      mobileSrc:
        "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/footer/card-icons/mastercard-mpbile.png",
      src: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/footer/card-icons/mastercard.png",
      alt: "mastercard",
    },
    {
      mobileSrc:
        "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/footer/card-icons/pinelabs-mobile.png",
      src: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/footer/card-icons/pinelabs.png",
      alt: "pinelabs",
    },
    {
      mobileSrc:
        "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/footer/card-icons/payu-mobile.png",
      src: "https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/common/footer/card-icons/payu.png",
      alt: "payu",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className="vs-container">
        <div className={styles.footerTop}>
          <div className={styles.subscribeSection}>
            <h4>
              Stay in touch with us, get product updates, offers, discounts
              directly to your inbox
            </h4>
            <form className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter Email Address"
                className={styles.emailInput}
              />
              <label className={styles.checkboxLabel}>
                <input type="checkbox" /> By selecting this option you agree
                with our Privacy policy and Terms & Conditions
              </label>
              <button className={styles.subscribeButton}>Subscribe</button>
            </form>
          </div>

          <div className={styles.footerRight}>
            <div className={styles.linksSection}>
              <div>
                <h5>Categories</h5>
                <ul>
                  <li>
                    <a href="#">Television</a>
                  </li>
                  <li>
                    <a href="#">Smartphone</a>
                  </li>
                  <li>
                    <a href="#">Laptops</a>
                  </li>
                  <li>
                    <a href="#">Washing Machines</a>
                  </li>
                  <li>
                    <a href="#">Party Speakers</a>
                  </li>
                  <li>
                    <a href="#">Gaming</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Services</h5>
                <ul>
                  <li>
                    <a href="#">Cancellation and Return</a>
                  </li>
                  <li>
                    <a href="#">Loyalty Program</a>
                  </li>
                  <li>
                    <a href="#">VS Warranty</a>
                  </li>
                  <li>
                    <a href="#">Enquiries/B2B Orders</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Trending Products</h5>
                <ul>
                  <li>
                    <a href="#">iPhone 16</a>
                  </li>
                  <li>
                    <a href="#">iPhone 16 Pro</a>
                  </li>
                  <li>
                    <a href="#">TV</a>
                  </li>
                  <li>
                    <a href="#">Geyser</a>
                  </li>
                  <li>
                    <a href="#">HP Laptop</a>
                  </li>
                  <li>
                    <a href="#">Smartwatch</a>
                  </li>
                  <li>
                    <a href="#">Microwave</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.linksSection}>
              <div>
                <div>
                  <h5>About us</h5>

                  <h5>
                    <a href="#">Careers</a>
                  </h5>
                  <h5>
                    <a href="#">e-Waste</a>
                  </h5>
                  <h5>
                    <a href="#">Contact</a>
                  </h5>
                  <h5>
                    <a href="#">Order Status</a>
                  </h5>
                </div>
              </div>
              <div>
                <h5>
                  <a href="#">Help Center</a>{" "}
                </h5>
                <h5>
                  <a href="#">Shipping & Delivery</a>
                </h5>
                <h5>
                  <a href="#">My Account</a>
                </h5>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">Pricing and Payments</a>
                  </li>
                  <li>
                    <a href="#">Store Locator</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">Brand Stores</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Caution Notice</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.socialLinks}>
            <h5>Follow us on Socials</h5>
            <ul>
              <li>
                <a href="#">
                  <Image
                    width={24}
                    height={24}
                    src="/whatsapp.svg"
                    alt="Whatsapp"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    width={24}
                    height={24}
                    src="/facebook.svg"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    width={24}
                    height={24}
                    src="/twitter.svg"
                    alt="Twitter"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    width={24}
                    height={24}
                    src="/instagram.svg"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    width={24}
                    height={24}
                    src="/youtube.svg"
                    alt="YouTube"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    width={24}
                    height={24}
                    src="/linkedin.svg"
                    alt="LinkedIn"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.appLinks}>
            <div>
              <h5>Download The Service App</h5>
              <a href="#">
                <Image
                  height={40}
                  width={136}
                  src="/play-store1.svg"
                  alt="Google Play"
                />
              </a>
              <a href="#">
                <Image
                  height={40}
                  width={136}
                  src="/app-store1.svg"
                  alt="App Store"
                />
              </a>
            </div>
          </div>
        </div>
        {/* <FooterLinks/> */}
        {/* <div className={styles.footerBottomSperator}></div> */}
        <div className={styles.footerlinksContainer}>
          <FooterLinks title="Air Conditioners" items={airConditioners} />
          <FooterLinks title="Televisions" items={televisions} />
        </div>
        <div className={styles.footerCopyright}>
          <div className={styles.copyright}>
            <h5>© 2013-2024, Vijay Sales, Inc.</h5>
          </div>
          <div className={styles.paymentLinksSection}>
            <p>We Accept</p>
            <div className={styles.paymentLogos}>
              <ul>
                {/* {paymentGatewaylinks.map((gateway) => (
                  <li>
                    <picture>
                      <source
                        media="(max-width: 768px)"
                        srcSet={gateway?.mobileSrc ?? ""}
                      />
                      <Image
                        src={gateway?.src}
                        width={30}
                        height={17}
                        style={{ objectFit: "contain", height: "auto" }}
                        alt={gateway.alt ?? "payment-portal"}
                      />
                    </picture>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
