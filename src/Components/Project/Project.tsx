import React from "react";
import classes from "./Project.module.scss";

interface ProjectProps {
  project: {
    name: string;
    image: any;
    githubLink: string;
    liveLink?: string;
  };
}

export default ({ project }: ProjectProps) => {
  return (
    <div className={classes.root}>
      <img src={project.image} alt={project.name} className={classes.image} />
      <p className={classes.name}>{project.name}</p>
    </div>
  );
};
