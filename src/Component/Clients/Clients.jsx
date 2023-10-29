import React from "react";
import styles from "./Clients.module.css";
import Person1 from "../../assets/Person1.png";
import Person2 from "../../assets/Person2.png";
import Person3 from "../../assets/Person3.png";
import Arrow from "../../assets/Arrow.png";

const Clients = () => {
  return (
    <div>
      <div className={styles.heading}>
        <h1 className={styles.h1}>What says our happy Clients</h1>
        <div className={styles.heading}>
          <div className={styles.circle}>
            <img src={Arrow} alt="Not Found" className={styles.arrowImg} />
          </div>
          <div className={styles.circle}>
            <img src={Arrow} alt="Not Found" className={styles.arrowImgRight} />
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <img src={Person1} alt="Gift" className={styles.personimg} />
          </div>
          <div>
            <h4 className={styles.h4}>Jane Cooper</h4>
            <h4 className={styles.h5}>Ceo of Hunt</h4>

            <p className={styles.p}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <img src={Person2} alt="Gift" className={styles.personimg} />
          </div>
          <div>
            <h4 className={styles.h4}>Jane Cooper</h4>
            <h4 className={styles.h5}>Ceo of Hunt</h4>

            <p className={styles.p}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <img src={Person3} alt="Gift" className={styles.personimg} />
          </div>
          <div>
            <h4 className={styles.h4}>Jane Cooper</h4>
            <h4 className={styles.h5}>Ceo of Hunt</h4>

            <p className={styles.p}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
