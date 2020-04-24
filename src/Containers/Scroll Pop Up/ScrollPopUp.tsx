import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./ScrollPopUp.module.scss";
// @ts-ignore
import AnchorLink from "react-anchor-link-smooth-scroll";
//Typed Version is not available

// Prop Types
interface ScrollPopUpProps {
  didScrolled: boolean;
}

// Export Function
const ScrollPopUp = ({ didScrolled }: ScrollPopUpProps) => {
  const [show, setShow] = useState(false);
  let classes = [styles.scrollPopUp];

  // set ShowPopUp After 5s
  setTimeout(() => setShow(true), 5000);

  if (didScrolled) {
    classes = [styles.scrollPopUp];
  }

  // If user haven't scrolled, and show is true, Popup will be shown
  if (show && !didScrolled) {
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
