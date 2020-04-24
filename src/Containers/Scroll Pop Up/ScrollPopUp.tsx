import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./ScrollPopUp.module.scss";
// @ts-ignore
import AnchorLink from "react-anchor-link-smooth-scroll";
//Typed Version is not available

// Export Function
const ScrollPopUp = () => {
  const [show, setShow] = useState(false);
  let classes = [styles.scrollPopUp];

  // set ShowPopUp After 5s
  setTimeout(() => setShow(true), 5000);

  // If user haven't scrolled, and show is true, Popup will be shown
  if (show) {
    classes = [styles.scrollPopUp, styles.show];
  }

  return (
    <AnchorLink href="#skills">
      <div className={classes.join(" ")}>
        Scroll <FaChevronDown />
      </div>
    </AnchorLink>
  );
};

export default ScrollPopUp;
