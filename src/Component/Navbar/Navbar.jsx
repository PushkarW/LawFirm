import React from "react";
import Logo from "../../assets/Group 10386.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={Logo} alt="logo-img" width={143} />
      <div className={styles.navcontent}>
        <span className={styles.pointer}>Home </span>
        <span className={styles.pointer}>Attorneys </span>
        <span className={styles.pointer}>Practice Area </span>
        <span className={styles.pointer}>About Us </span>
      </div>
      <button className={styles.btn}>Contact Now</button>
    </nav>
  );
};

export default Navbar;
