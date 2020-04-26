import React, { useEffect, useState } from "react";
import styles from "./HeroBox.module.scss";
import ScrollPopUp from "../../Containers/Scroll Pop Up/ScrollPopUp";

const HeroBox = () => {
  let i = 0;
  let lastOffset = 0;
  const [didScrolled, setScrolled] = useState(false);

  let isFirstRender = true;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!isFirstRender) setScrolled(true);
      isFirstRender = false;
    });
    return window.removeEventListener("scroll", () => setScrolled(false));
  }, [didScrolled]);

  window.addEventListener("scroll", () => {
    const factor = 2;
    if (i * factor < 200) {
      if (lastOffset < window.pageYOffset)
        // @ts-ignore
        document.getElementById("heroBox").style.transform = `translateY(${
          ++i * factor
        }px)`;
    }

    if (lastOffset > window.pageYOffset) {
      if (i > 0) {
        // @ts-ignore
        document.getElementById("heroBox").style.transform = `translateY(${
          --i * factor
        }px)`;
      }
      if (window.pageYOffset === 0) {
        // @ts-ignore
        document.getElementById(
          "heroBox"
        ).style.transform = `translateY(${0}px)`;
      }
    }

    lastOffset = window.pageYOffset;
  });

  return (
    <div className={styles.herBoxContainer}>
      <div className={styles.herBox} id={"heroBox"}>
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
