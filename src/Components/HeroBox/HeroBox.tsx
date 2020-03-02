import React from "react";
import styles from "./HeroBox.module.scss";

const HeroBox = () => {
  return (
    <div className={styles.herBox}>
      <div className={styles.title}>
        Hello, I am <span>Aryansh Mahato</span>
      </div>
      <div className={styles.description}>Front End Web Developer</div>
    </div>
  );
};

export default HeroBox;
