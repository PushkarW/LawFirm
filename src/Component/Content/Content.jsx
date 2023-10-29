import React from "react";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.main}>
      <div className={styles.child1}>
        <h1 className={styles.h1}>Let’s Introduce Ourself</h1>
      </div>
      <div className={styles.line}></div>
      <div className={styles.child1}>
        <h1>Criminal Lawyer</h1>
        <p className={styles.p}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Content;
