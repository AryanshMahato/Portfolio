import React, { useEffect, useState } from "react";

import styles from "./NavBar.module.scss";

import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
import MobileNavLinks from "./MobileNav/MobileNavLinks/MobileNavLinks";

const NavBar = () => {
  const [showMobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    if (showMobileNav) {
      // @ts-ignore
      document.querySelector("body").style.overflow = "hidden";
    } else {
      // @ts-ignore
      document.querySelector("body").style.overflowY = "scroll";
    }
  }, [showMobileNav]);

  return (
    <div className={styles.NavBar}>
      <DesktopNav />
      <MobileNav menuClicked={() => setMobileNav(true)} />
      <MobileNavLinks
        show={showMobileNav}
        closeButtonClicked={() => setMobileNav(false)}
      />
    </div>
  );
};

export default NavBar;
