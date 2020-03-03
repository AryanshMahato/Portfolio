import React from "react";
import { FaChevronDown } from "react-icons/fa";

import styles from "./ScrollPopUp.module.scss";

interface ScrollPopUpProps {
  didScrolled: boolean;
}

const ScrollPopUp = ({ didScrolled }: ScrollPopUpProps) => {
  if (didScrolled) {
    return null;
  }
  return (
    <div className={styles.scrollPopUp}>
      Scroll <FaChevronDown />
    </div>
  );
};

export default ScrollPopUp;
