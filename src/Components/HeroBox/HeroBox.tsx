import React from "react";
import styles from "./HeroBox.module.scss";
import ScrollPopUp from "../../Containers/Scroll Pop Up/ScrollPopUp";

const HeroBox = () => {
  return (
    <div className={styles.herBox}>
      <div className={styles.title}>
        Hello, I am <span>Aryansh Mahato</span>
      </div>
      <div className={styles.description}>Front End Web Developer</div>
      <ScrollPopUp />
    </div>
  );
};

export default HeroBox;
