import Image from "next/image";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="phone number"
            height="32"
            width="32"
          />
        </div>{" "}
        <div className={styles.texts}>
          <div className={styles.text}> CALL ME NOW </div>{" "}
          <div className={styles.text}> +243 99 58 68 621 </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}> Home page </li>{" "}
          <li className={styles.listItem}> Products </li>{" "}
          <li className={styles.listItem}> Menu </li>{" "}
          <li className={styles.listItem}> Events </li>{" "}
          <li className={styles.listItem}> Blog </li>{" "}
          <li className={styles.listItem}> Contact </li>{" "}
        </ul>{" "}
      </div>{" "}
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="logo " width="32" height="32" />
          <div className={styles.counter}> 2 </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
