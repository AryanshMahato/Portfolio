import React from "react";
import classes from "./ProjectLink.module.scss";

interface GithubLinkProps {
  githubLink: string;
}

export default ({ githubLink }: GithubLinkProps) => {
  return (
    <a
      href={githubLink}
      className={classes.root}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      GithubLink
    </a>
  );
};
