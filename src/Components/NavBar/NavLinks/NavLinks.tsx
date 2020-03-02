import React from "react";

import styles from "./NavLinks.module.scss";

import { NavItems } from "../../../Utils/Interface";
import { NavItemType } from "../../../Utils/enums";

interface NavLinksProps {
  NavItems: Array<NavItems>;
}

const NavLinks = ({ NavItems }: NavLinksProps) => {
  const showNavLinks = () => {
    return NavItems.map(NavItem => {
      if (NavItem.type === NavItemType.normal) {
        return (
          <li className={styles.navLink} key={NavItem.name}>
            {NavItem.name}
          </li>
        );
      }
      return (
        <li className={  styles.cta} key={NavItem.name}>
          {NavItem.name}
        </li>
      );
    });
  };

  return <div className={styles.navLinks}>{showNavLinks()}</div>;
};

export default NavLinks;
