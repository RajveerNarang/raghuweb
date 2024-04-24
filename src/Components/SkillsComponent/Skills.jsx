import React, { useState } from 'react'
import 'chartjs-adapter-date-fns';


import LineChart from '@components/Basics/Charts/LineChart'
import PieBarChart from '@components/Basics/Charts/PieBarChart';
import BtnGroup from '@components/SkillsComponent/BtnGroup';

import styles from "@components/SkillsComponent/skill.module.scss";
import JourneyTree from '@components/SkillsComponent/JourneyTree';

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
