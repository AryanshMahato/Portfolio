import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagram
} from "react-icons/fa";

import styles from "./SocialHandles.module.scss";

const SocialHandles = () => {
  const handleList: Array<any> = [
    {
      name: "Github",
      logo: <FaGithubSquare />,
      link: "https://github.com/AryanshMahato"
    },
    {
      name: "LinkedIn",
      logo: <FaLinkedin />,
      link: "https://www.linkedin.com/in/aryansh-mahato-a4b33015a/"
    },
    {
      name: "Instagram",
      logo: <FaInstagram />,
      link: "https://www.instagram.com/aryanshmahato/"
    },
    {
      name: "Twitter",
      logo: <FaTwitterSquare />,
      link: "https://twitter.com/AryanshMahato"
    }
  ];

  const showHandle = () => {
    return handleList.map(listItem => (
      <li className={styles.socialHandle} key={listItem.link}>
        <a href={listItem.link} target={"_blank"} rel="noopener noreferrer">
          {listItem.logo}
        </a>
      </li>
    ));
  };

  return <ul className={styles.socialHandles}>{showHandle()}</ul>;
};

export default SocialHandles;
