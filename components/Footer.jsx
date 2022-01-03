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
        <div className={styles.card}>
          <h1 className={styles.title}>FIND YOUR RESTAURANTS</h1>
          <p className={styles.text}>
            1456 av de goma R. Don Road #304.
            <br /> New york, 85022
            <br /> (4584) 894-10278
          </p>
          <p className={styles.text}>
            1456 av de goma R. Don Road #304.
            <br /> New york, 85022
            <br /> (4584) 894-10278
          </p>
          <p className={styles.text}>
            1456 av de goma R. Don Road #304.
            <br /> New york, 85022
            <br /> (4584) 894-10278
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            1456 av de goma R. Don Road #304.
            <br /> New york, 85022
            <br /> (4584) 894-10278
          </p>
          <p className={styles.text}>
            1456 av de goma R. Don Road #304.
            <br /> New york, 85022
            <br /> (4584) 894-10278
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
