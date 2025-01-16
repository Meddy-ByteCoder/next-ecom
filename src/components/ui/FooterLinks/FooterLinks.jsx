import styles from "./FooterLinks.module.scss";

export default function FooterLinks({ title, items }) {
  return (
    <div className={styles.linkSection}>
      <h5 className={styles.sectionTitle}>{title}</h5>
      <div className={styles.linkList}>
        {items.map((item, index) => (
          <span key={index} className={styles.linkItem}>
            <a href="#" className={styles.link}>
              {item}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}
