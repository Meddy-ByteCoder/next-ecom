import React from "react";
import Image from "next/image";
import styles from "./CategoryList.module.scss";
import Link from "next/link";

const categories = [
  {
    alt: "wedding-store-alt",
    name: "Wedding Store",
    icon: "https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_221465943/teaser.coreimg.png/1735886267041/wedding-store-quick-link-icon-for-new-website.png",
    mobIcon:
      "https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_221465943/teaser.coreimg.png/1735886267041/wedding-store-quick-link-icon-for-new-website.png",
    link: "/wedding-store",
    w: 135,
    h: 64,
  },
  {
    alt: "television-alt",
    name: "Television",
    icon: "https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_221465943/teaser_copy.coreimg.png/1732015746552/television-logo.png",
    mobIcon:
      "https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_221465943/teaser_copy.coreimg.png/1732015746552/television-logo.png",
    link: "/television",
    w: 90,
    h: 56,
  },
  {
    alt: "mobile-tablets-alt",
    name: "Mobiles & Tablets",
    icon: "https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_221465943/teaser_copy_593880471.coreimg.png/1731598874877/mobiles-and-tablets-logo.png",
    link: "/category/NTI3",
    w: 51,
    h: 56,
  },
  {
    alt: "washing-machines-alt",
    name: "Washing Machines",
    icon: "https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_221465943/teaser_copy_203860864.coreimg.png/1731593827867/washing-machine-logo.png",
    link: "/washing-machines",
    w: 42,
    h: 56,
  },
  {
    alt: "laptops-text",
    name: "Laptops",
    icon: "https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_221465943/teaser_copy_1968993868.coreimg.png/1731593791655/laptops-logo.png",
    link: "/laptops",
    w: 85,
    h: 56,
  },
  {
    alt: "laptops-text-alt",
    name: "Gaming",
    icon: "https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_221465943/teaser_copy_1713299127.coreimg.png/1736837172130/gaming-logo.png",
    link: "/gaming",
    w: 84,
    h: 56,
  },
];

const CategoryList = () => {
  return (
    <div className={styles.container}>
      {categories.map((category, index) => (
        <Link href={category.link} key={index}>
          <div className={styles.category}>
            <picture>
              <source
                media="max-width:767px"
                srcSet="https://www.vijaysales.com/_jcr_content/root/container/container/vscontainer_221465943/teaser.coreimg.png/1735886267041/wedding-store-quick-link-icon-for-new-website.png"
              />

              <Image
                src={category.icon}
                alt={category.alt}
                className={styles.categoryIcon}
                width={category.w}
                height={category.h}
                style={{ objectFit: "contain" }}
              />
            </picture>
            <span className={styles.categoryName}>{category.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
