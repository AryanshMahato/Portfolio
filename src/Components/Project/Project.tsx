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
      <div className={classes.imageContainer}>
        <img src={project.image} alt={project.name} className={classes.image} />
      </div>
      <p className={classes.name}>{project.name}</p>
    </div>
  );
};
