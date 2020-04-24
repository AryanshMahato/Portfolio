import React from "react";
import styles from "./Skills.module.scss";
import SkillsList from "../../Containers/Skills List/SkillsList";
import ReadMoreButton from "../../Global/Buttons/ReadMoreButton";

export default function Skills() {
  const readMoreClicked = () => {
    console.log("Readmore Clicked");
  };

  return (
    <div className={styles.Skills} id={"skills"}>
      <h1 className={styles.SkillsAnnotation}>Skills</h1>
      <div className={styles.SkillsListContainer}>
        List
        <div className={styles.button}>
          <ReadMoreButton onClick={readMoreClicked} />
        </div>
      </div>
      {/* <SkillsList /> */}
    </div>
  );
}
