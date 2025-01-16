import styles from "./page.module.scss";

import ProductGrid from "@/components/ui/PoductGrid";
import {
  cards,
  featuredProductsOne,
  featuredProductsTwo,
  filterArr,
  slides,
} from "constants/product";
import ProductCard from "@/components/ui/ProductCard";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import BackgroundClient from "@/components/ui/BackgroundClient/BackgroundClient";
import ProductCarousel from "@/components/ui/ProductCarousel";
import HeroCarousel from "@/components/ui/HeroCarousel";
import BankingCards from "@/components/ui/BankingCards";
import CategoryList from "@/components/ui/CategoryList";
import getProducts from "services/getProducts";
import getDevice from "services/getDevice";
import getProductSku from "services/getProductSku";
import getPincodeDetails from "services/getPincodeDetails";
import createCart from "services/createCart";

export default async function Home() {
  const isMobile = await getDevice();

  const productCardStyles = {
    cardHead: {
      backgroundColor: "#e0e2e5",
      marginBottom: 16,
    },
  };

  const aemResponse = await getProductSku();

  const aemData = aemResponse
    ? aemResponse.homePageProductListDemoList.items
    : [];

  function getResource(arr, id) {
    if (arr) {
      let newObj = arr.find((ele) => ele.id == id);
      return newObj?.productSkus ?? [];
    }
    return null;
  }

  const cart = await createCart();
  // console.log("cart", cart);

  const productOne = await getProducts({
    sort: {},
    filters: { sku: getResource(aemData, "apple-days") },
    currentPage: 1,
  });

  const productTwo = await getProducts({
    sort: {},
    filters: { sku: getResource(aemData, "electronic-bestsellers") },
    currentPage: 1,
  });

  const productThree = await getProducts({
    sort: {},
    filters: { sku: getResource(aemData, "home-essentials") },
    currentPage: 1,
  });

  const productFour = await getProducts({
    sort: {},
    filters: { sku: getResource(aemData, "exclusive-deals") },
    currentPage: 1,
  });

  const productFive = await getProducts({
    sort: {},
    filters: { sku: getResource(aemData, "low-price") },
    currentPage: 1,
  });

  const productSix = await getProducts({
    sort: {},
    filters: { sku: getResource(aemData, "super-offers") },
    currentPage: 1,
  });

  return (
    <div className="home-page">
      <div className="vs-container">
        <HeroCarousel isMobile={isMobile} priority={true} slides={slides} />
      </div>

      <div className="vs-container">
        <BankingCards cards={cards} />
      </div>
      <div className="vs-container">
        <CategoryList />
      </div>

      <div className="vs-container">
        <FeaturedProducts
          productData={productOne?.products?.items}
          customStyles={productCardStyles}
          title={featuredProductsOne.title}
          text={featuredProductsOne.text}
          subText={featuredProductsOne.subText}
          loading="eager"
        />
      </div>

      {/* section two */}
      <div className={styles["bestseller-wrapper"]}>
        <BackgroundClient
          url="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/seasonal-product-offer/Home_Page_Seson_vice(Desktop) Background.jpg"
          mobileUrl="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/seasonal-product-offer/Home_Page_Seson_vice(Mobile)%20Background.jpg"
        />

        <div className="vs-container">
          <ProductGrid
            title={"Electronics Bestsellers:"}
            secondTitle={"Splash into Great Deals"}
            filters={filterArr}
            customStyles={{
              btnBgColor: "#EBE7DC",
            }}
          >
            {productTwo?.products?.items.map((product) => (
              <ProductCard
                customStyles={{
                  cardHead: { border: "0px" },
                }}
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
                loading="eager"
              />
            ))}
          </ProductGrid>
        </div>
      </div>

      {/* section three */}

      <div className="vs-container">
        <ProductGrid title={"Home Essentials"} filters={filterArr}>
          {productThree?.products?.items.map((product) => (
            <ProductCard
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
              loading="eager"
            />
          ))}
        </ProductGrid>
      </div>

      <div className="vs-container">
        <ProductGrid title={"Exclusive Deals & Offers"} filters={filterArr}>
          {productFour?.products?.items.map((product) => (
            <ProductCard
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
              loading="lazy"
            />
          ))}
        </ProductGrid>
      </div>

      <div className="vs-container">
        <div className={styles["promotion-offer-banner"]}>
          <BackgroundClient
            loading="lazy"
            url="https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_318402664/vscontainer/productpromtioncardt.coreimg.jpeg/1736924890852/laptop-dekstop-banner.jpeg"
            mobileUrl="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/category-banner-with-product/Laptop Mobile Banner.jpg"
          />
        </div>
      </div>

      <div className="vs-container">
        <div className={styles["promotion-offer-products"]}>
          <ProductCarousel>
            {productFive?.products?.items.map((product) => (
              <ProductCard
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
                loading="lazy"
              />
            ))}
          </ProductCarousel>
        </div>
      </div>

      <div className="vs-container">
        <FeaturedProducts
          productData={productSix?.products?.items}
          titleSize="sm"
          titleImg="https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_12300264/vscontainer/image.coreimg.svg/1721908207814/super-offers.svg"
          customStyles={productCardStyles}
          title={featuredProductsTwo.title}
          text={featuredProductsTwo.text}
          subText={featuredProductsTwo.subText}
        />
      </div>
    </div>
  );
}
