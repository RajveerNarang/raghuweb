import React, { useState } from 'react'
import 'chartjs-adapter-date-fns';

import { 
  barDataFilter, createBarChartOptions, 
  pieDataFilter, createPieChartOptions, 
  createLineChartOptions, lineDataFilter
} from '@utils/charts';

import skillData from '@json/skills.json';
import LineChart from '@components/Basics/Charts/LineChart'
import PieBarChart from '@components/Basics/Charts/PieBarChart';
import BtnGroup from '@components/SkillsComponent/BtnGroup';

import styles from "@components/SkillsComponent/skill.module.scss";

const Skills = () => {

  const [selectedCategory, setSelectedCategory] = useState("Frontend")

  const barData = barDataFilter(skillData, selectedCategory);
	const barOptions = createBarChartOptions()

  const pieData = pieDataFilter(skillData, selectedCategory);
  const pieOptions = createPieChartOptions()

  const lineData = lineDataFilter(skillData);
	const lineOptions = createLineChartOptions()
  
  // TODO: Display Tooltip, default behavior not working

  return (
	<div className={`${styles.container}`}>
    <BtnGroup categoryAssign={setSelectedCategory} />
    {selectedCategory !== 'Journey' ? 
      <PieBarChart 
        barData={barData} 
        pieData = {pieData}
        barOptions={barOptions} 
        pieOptions={pieOptions}
      /> 
      : 
      <LineChart 
        data={lineData} 
        options={lineOptions} 
      />
    }
  </div>
  )
}

export default Skills
