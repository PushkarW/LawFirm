import React from "react";
import styles from "./Success.module.css";
import Gift from "../../assets/Gift 1.png";

const Success = () => {
  return (
    <div>
      <h1>Why Choose us?</h1>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.circle}>
            <img src={Gift} alt="Gift" className={styles.giftimg} />
          </div>
          <div>
            <h4 className={styles.h4}>98% Success Rate</h4>
            <p className={styles.p}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.circle}>
            <img src={Gift} alt="Gift" className={styles.giftimg} />
          </div>
          <div>
            <h4 className={styles.h4}>100% Success Rate</h4>
            <p className={styles.p}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.circle}>
            <img src={Gift} alt="Gift" className={styles.giftimg} />
          </div>
          <div>
            <h4 className={styles.h4}>98% Success Rate</h4>
            <p className={styles.p}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
