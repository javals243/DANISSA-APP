import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const images=
   [ "/img/bg.png",
     "/img/pizza.png",]
    const [index, setindex] = useState(0)
 const  handlerArrow=(direction)=>{
      if(direction ==="l"){
        setindex(index !==0 ? index-1: 1)
      }
       if (direction === "r") {
         setindex(index !== 1 ? index + 1 : 0);
       }
       console.log(index)
 }
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handlerArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt="right"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        <div className={styles.imgContainer}>
          {images.map((item, key) => (
            <Image
              src={item}
              alt=""
              layout="fill"
              key={key}
              objectFit="contain"
            />
          ))}
        </div>
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handlerArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt="left"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
