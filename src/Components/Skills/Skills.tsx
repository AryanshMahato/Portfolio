import React from 'react';
import styles from './Skills.module.scss';
import SkillsList from '../../Containers/Skills List/SkillsList';

export default function Skills() {
	return (
		<div className={styles.Skills}>
			<h1 className={styles.SkillsAnnotation}>Skills</h1>
			<div className={styles.SkillsListContainer}>List</div>
			{/* <SkillsList /> */}
		</div>
	);
}
