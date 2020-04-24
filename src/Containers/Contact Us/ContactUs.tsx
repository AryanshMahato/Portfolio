import React, { FormEvent } from "react";
import classes from "./ContactUs.module.scss";
import Undraw from "../../Assets/Undraw.svg";
import ContactUsForm from "../../Components/Forms/ContactUsForm";
import Heading from "../../Global/Heading/Heading";

export default () => {
  const formSubmitHandler = (e: FormEvent<HTMLFormElement>, values: any) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className={classes.root}>
      <Heading className={classes.annotation}>Let's Have a Chat</Heading>
      <div className={classes.main}>
        <ContactUsForm formSubmitted={formSubmitHandler} />
        <img src={Undraw} alt="" className={classes.image} />
      </div>
    </div>
  );
};
