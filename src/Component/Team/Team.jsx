import React from "react";
import styles from "./Team.module.css";
import Team1 from "../../assets/Team1.png";
import Team2 from "../../assets/Team2.png";
import Team3 from "../../assets/Team3.png";
import Team4 from "../../assets/Team4.png";
import Team5 from "../../assets/Team5.png";
import Team6 from "../../assets/Team6.png";

const Team = () => {
  return (
    <div>
      <h1>Our Team</h1>
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <img src={Team1} alt="Team1" className={styles.img} />
          <div>
            <h4 className={styles.h4}>Danial Def</h4>
            <p className={styles.p}>301 Cases</p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Team2} alt="Team2" className={styles.img} />
          <div>
            <h4 className={styles.h4}>Sanfole</h4>
            <p className={styles.p}>850 Cases</p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Team3} alt="Team3" className={styles.img} />
          <div>
            <h4 className={styles.h4}>Cesforila</h4>
            <p className={styles.p}>470 Cases</p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Team4} alt="Team4" className={styles.img} />
          <div>
            <h4 className={styles.h4}>Colleen</h4>
            <p className={styles.p}>180 Cases</p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Team5} alt="Team5" className={styles.img} />
          <div>
            <h4 className={styles.h4}>Haldone</h4>
            <p className={styles.p}>212 Cases</p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Team6} alt="Team6" className={styles.img} />
          <div>
            <h4 className={styles.h4}>Nik Joe</h4>
            <p className={styles.p}>350 Cases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
