import React from "react";
import styles from "./NavLinks.module.scss";
import { NavItemType } from "../../../Utils/enums";
// @ts-ignore
import AnchorLink from "react-anchor-link-smooth-scroll";
// Typed Version is not available

interface NavItems {
  name: string;
  type: NavItemType;
}

interface NavLinksProps {
  NavItems: Array<NavItems>;
}

const NavLinks = ({ NavItems }: NavLinksProps) => {
  const showNavLinks = () => {
    return NavItems.map((NavItem) => {
      if (NavItem.type === NavItemType.normal) {
        return (
          <li className={styles.navLink} key={NavItem.name}>
            <AnchorLink href={`#${NavItem.name.toLocaleLowerCase()}`}>
              {NavItem.name}
            </AnchorLink>
          </li>
        );
      }
      return (
        <li className={styles.cta} key={NavItem.name}>
          {NavItem.name}
        </li>
      );
    });
  };

  return <div className={styles.navLinks}>{showNavLinks()}</div>;
};

export default NavLinks;
