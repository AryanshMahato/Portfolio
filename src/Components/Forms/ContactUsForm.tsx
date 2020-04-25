import React, { ChangeEvent, FormEvent, useState } from "react";
import classes from "./ContactUsForm.module.scss";
import { FaPaperPlane } from "react-icons/all";

interface ContactUsFormProps {
  formSubmitted: (e: FormEvent<HTMLFormElement>, values: any) => void;
}

export default ({ formSubmitted }: ContactUsFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(e) => formSubmitted(e, { name, email, message })}
      className={classes.root}
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder={"Your Name"}
        className={classes.input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder={"Your Email address"}
        className={classes.input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <textarea
        name="message"
        placeholder={
          "Hey Aryansh! I had a look at your Portfolio. Let's have a chat!"
        }
        className={classes.textArea}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(e.target.value)
        }
      />
      <button type="submit" className={classes.button}>
        Send
        <FaPaperPlane className={classes.icon} />
      </button>
    </form>
  );
};
