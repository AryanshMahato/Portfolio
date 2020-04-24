import React from "react";
import classes from "./ProjectLink.module.scss";

interface LiveLinkProps {
  liveLink: string;
}

export default ({ liveLink }: LiveLinkProps) => {
  return (
    <a
      href={liveLink}
      className={classes.root}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      LiveLink
    </a>
  );
};
