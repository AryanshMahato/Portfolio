import React, { useEffect, useState } from "react";
import styles from "./HeroBox.module.scss";
import ScrollPopUp from "../../Containers/Scroll Pop Up/ScrollPopUp";

const HeroBox = () => {
  const [didScrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(true));
    return window.removeEventListener("scroll", () => setScrolled(false));
  }, []);

  return (
    <div className={styles.herBoxContainer} onScroll={() => console.log("hi")}>
      <div className={styles.herBox}>
        <div className={styles.title}>
          Hello, I am <span>Aryansh Mahato</span>
        </div>
        <div className={styles.description}>Full Stack Web Developer</div>
        <ScrollPopUp didScrolled={didScrolled} />
      </div>
    </div>
  );
};

export default HeroBox;
