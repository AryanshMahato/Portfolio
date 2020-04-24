import React from "react";
import classes from "./Projects.module.scss";
import Heading from "../../Global/Heading/Heading";

export default () => {
  return (
    <div className={classes.root}>
      <Heading>PROJECTS</Heading>
      <a
        href={"https://github.com/AryanshMahato"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        Checkout More Projects on my Github
      </a>
    </div>
  );
};
