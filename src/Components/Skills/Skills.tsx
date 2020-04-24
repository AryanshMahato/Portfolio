import React from "react";
import styles from "./Skills.module.scss";
import SkillsList from "../../Containers/Skills List/SkillsList";
import ReadMoreButton from "../../Global/Buttons/ReadMoreButton";
import Heading from "../../Global/Heading/Heading";

export default function Skills() {
  const readMoreClicked = () => {
    console.log("Readmore Clicked");
  };

  return (
    <div className={styles.Skills} id={"skills"}>
      <Heading>Skills</Heading>
      <div className={styles.SkillsListContainer}>
        <SkillsList />
        <div className={styles.button}>
          <ReadMoreButton onClick={readMoreClicked} />
        </div>
      </div>
    </div>
  );
}
