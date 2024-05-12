import React, { useState } from 'react'

import PieBarChart from '@components/Basics/Charts/PieBarChart';
import BtnGroup from '@components/SkillsComponent/BtnGroup';

import styles from "@components/SkillsComponent/skill.module.scss";
import JourneyTree from '@components/SkillsComponent/JourneyTree';

/**
 * Function to render the Skills component, which displays different categories based on the selectedCategory state.
 *
 * @return {JSX.Element} The JSX element representing the Skills component.
 */
const Skills = () => {
	const [selectedCategory, setSelectedCategory] = useState("Frontend")

	return (
		<div className={`${styles.container}`}>
			<BtnGroup categoryAssign={setSelectedCategory} />
			{selectedCategory !== 'Journey' ? 
			<PieBarChart selectedCategory={selectedCategory} /> 
			: 
			<JourneyTree />
			}
		</div>
	)
}

export default Skills
