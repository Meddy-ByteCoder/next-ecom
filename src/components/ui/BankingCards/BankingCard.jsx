import React from "react";
import styles from "./Bankingcard.module.scss";
import Image from "next/image";

const BankingCards = ({ cards }) => {
  return (
    <div className={styles.container}>
      <div className={styles["slider"]}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <Image
                height={13}
                width={64}
                src={card.image}
                alt={card.bank}
                sizes="(max-width: 768px) 64px, 100vw"
                loading="eager"
              />
              <div className={styles.separator}></div>
              <div className={styles.textContainer}>
                <h3>{card.title}</h3>
                <p>{card.bank}</p>
                <p className={styles.terms}>{card.terms}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankingCards;
