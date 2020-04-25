import React from "react";
import classes from "./Spinner.module.scss";
import Backdrop from "../Backdrop/Backdrop";

export default () => {
  return (
    <div className={classes.root}>
      <Backdrop />
      <div className={classes.loader} />
    </div>
  );
};
