import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/Group 10386.png";
import Insta from "../../assets/Insta.png";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import Printrest from "../../assets/Printrest.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <img src={Logo} alt="logo-img" width={143} />
        <div className={styles.navcontent}>
          <span>Home </span>
          <span>Attorneys </span>
          <span>Practice Area </span>
          <span>About Us </span>
        </div>
        <div className={styles.media}>
          <img src={Insta} alt="Insta" />
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Titter" />
          <img src={Printrest} alt="Printrest" />
        </div>
      </nav>
      <div className={styles.copyright}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
