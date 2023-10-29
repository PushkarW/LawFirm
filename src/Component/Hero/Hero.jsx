import React from "react";
import styles from "./Hero.module.css";
import Photo from "../../assets/Man.png";
import MessageIcon from "../../assets/MessageIcon.png";
const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.child1}>
        <h1 className={styles.heading}>You don't have to Fignt them Alone</h1>
        <p className={styles.subHeading}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.inputContainer}>
          <img src={MessageIcon} alt="Not Found" className={styles.icon} />
          <input
            type="text"
            placeholder="Enter your email address"
            className={styles.search}
          />
          <button className={styles.searchBtn}>Let's Talk</button>
        </div>
      </div>
      <div>
        <img className={styles.photoMan} src={Photo} alt="Not found" />
        <div className={styles.backdrop}></div>
      </div>
    </div>
  );
};

export default Hero;
