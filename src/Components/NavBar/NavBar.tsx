import React from "react";

import styles from "./NavBar.module.scss";

import DesktopNav from "./DesktopNav/DesktopNav";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <DesktopNav />
    </div>
  );
};

export default NavBar;
