import React, { FormEvent } from "react";
import classes from "./ContactUs.module.scss";
import Undraw from "../../Assets/Undraw.svg";
import ContactUsForm from "../../Components/Forms/ContactUsForm";
import Heading from "../../Global/Heading/Heading";
import * as emailjs from "emailjs-com";

export default () => {
  const formSubmitHandler = (e: FormEvent<HTMLFormElement>, values: any) => {
    e.preventDefault();
    let templateParams = {
      from_name: values.email,
      to_name: "aryanshdev@gmail.com",
      subject: `${values.name} saw your Portfolio and wanted to have a chat`,
      message_html: values.message,
    };

    console.log(
      process.env.REACT_APP_TEMPLATE_ID,
      process.env.REACT_APP_USER_ID
    );

    emailjs
      .send(
        "gmail",
        process.env.REACT_APP_TEMPLATE_ID!,
        templateParams,
        process.env.REACT_APP_USER_ID!
      )
      .then((e) => console.log(e))
      .catch((e) => console.error(e));
  };

  return (
    <div className={classes.root} id={"hello"}>
      <Heading className={classes.annotation}>Let's Have a Chat</Heading>
      <div className={classes.main}>
        <ContactUsForm formSubmitted={formSubmitHandler} />
        <img src={Undraw} alt="" className={classes.image} />
      </div>
    </div>
  );
};
