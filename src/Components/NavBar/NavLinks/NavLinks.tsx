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
            {NavItem.name.toLocaleLowerCase() !== "resume" ? (
              <AnchorLink href={`#${NavItem.name.toLocaleLowerCase()}`}>
                {NavItem.name}
              </AnchorLink>
            ) : (
              <a
                href="https://drive.google.com/open?id=1vBnC29jioC84eB98ab5qHvwsr45FazZm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {NavItem.name}
              </a>
            )}
          </li>
        );
      }
      return (
        <AnchorLink href={"#hello"} className={styles.cta} key={NavItem.name}>
          {NavItem.name}
        </AnchorLink>
      );
    });
  };

  return <div className={styles.navLinks}>{showNavLinks()}</div>;
};

export default NavLinks;
