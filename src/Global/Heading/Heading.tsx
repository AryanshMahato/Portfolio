import React from "react";
import classes from "./Heading.module.scss";

interface HeadingProps {
  children: string;
}

export default ({ children }: HeadingProps) => {
  return <h1 className={classes.annotation}>{children}</h1>;
};
