import React from "react";
import Logo from "../../assets/Group 10386.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={Logo} alt="logo-img" width={143} />
      <div className={styles.navcontent}>
        <span>Home </span>
        <span>Attorneys </span>
        <span>Practice Area </span>
        <span>About Us </span>
      </div>
      <button className={styles.btn}>Contact Now</button>
    </nav>
  );
};

export default Navbar;
