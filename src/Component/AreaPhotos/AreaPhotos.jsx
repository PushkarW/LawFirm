import React from "react";
import styles from "./AreaPhotos.module.css";
import Image1 from "../../assets/Image-1.png";
import Image2 from "../../assets/Image-2.png";
import Image3 from "../../assets/Image-3.png";
import Image4 from "../../assets/Image-4.png";
import Image5 from "../../assets/Image-5.png";
import Image6 from "../../assets/Image-6.png";

const AreaPhotos = () => {
  return (
    <div className={styles.container}>
      <h1>Area of Practices</h1>
      <div className={styles.main}>
        <div>
          <img className={styles.imgs} src={Image2} alt="not Found" />
          <h4 className={styles.heading}>BUSINESS LAW</h4>
        </div>
        <div>
          <img className={styles.imgs} src={Image1} alt="not Found" />
          <h4 className={styles.heading}>Partnership LAW</h4>
        </div>
      </div>

      <div className={styles.middle}>
        <div>
          <img className={styles.imgs} src={Image3} alt="not Found" />
          <h4 className={styles.heading}>REAL ESTATE LAW</h4>
        </div>
        <div>
          <img className={styles.imgs} src={Image4} alt="not Found" />
          <h4 className={styles.heading}>BUSINESS LAW</h4>
        </div>
      </div>
      <div className={styles.main}>
        <div>
          <img className={styles.imgs} src={Image6} alt="not Found" />
          <h4 className={styles.heading}>LANDLORD DISPUTES</h4>
        </div>
        <div>
          <img className={styles.imgs} src={Image5} alt="not Found" />
          <h4 className={styles.heading}>ELDER ABUSE</h4>
        </div>
      </div>
    </div>
  );
};

export default AreaPhotos;
