import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
        </div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
};

export default Footer;
