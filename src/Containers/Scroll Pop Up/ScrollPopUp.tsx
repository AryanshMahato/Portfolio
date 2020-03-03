import React from "react";
import { FaChevronDown } from "react-icons/fa";

import styles from "./ScrollPopUp.module.scss";

const ScrollPopUp = () => {
  return (
    <div className={styles.scrollPopUp}>
      Scroll{" "}
      <i>
        <FaChevronDown />
      </i>
    </div>
  );
};

export default ScrollPopUp;
