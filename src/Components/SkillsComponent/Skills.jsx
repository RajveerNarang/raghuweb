import React, { useState } from 'react'

import 'chartjs-adapter-date-fns';

import { 
  barDataFilter, barOptionRender, 
  pieDataFilter, pieOptionRender, 
  lineOptionRender, lineDataFilter 
} from '@utils/charts';
import skillData from '@json/skills.json';
import styles from "@components/SkillsComponent/skill.module.scss";
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped';
import LineChart from '@components/Basics/Charts/LineChart'
import PieBarChart from '@components/Basics/Charts/PieBarChart';


const Skills = () => {

  const [selectedCategory, setSelectedCategory] = useState("Frontend")

  const barFilterData = barDataFilter(skillData, selectedCategory);
	const barOptions = barOptionRender()

  const pieFilterData = pieDataFilter(skillData, selectedCategory);
  const pieOptions = pieOptionRender()

  const lineFilterData = lineDataFilter(skillData);
	const lineOptions = lineOptionRender()
  
  // TODO: Display Tooltip, default behavior not working

  return (
	<div className={`${styles.container}`}>
    <div className={`${styles.btnFlex}`}>
      <ButtonReshaped 
        id={'frontend'} 
        name={'Frontend'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => setSelectedCategory('Frontend')} 
      />
      <ButtonReshaped 
        id={'backend'} 
        name={'Backend'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => setSelectedCategory('Backend')} 
      />
      <ButtonReshaped 
        id={'other'} 
        name={'Others'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => setSelectedCategory('Others')} 
      />
      <ButtonReshaped 
        id={'journey'} 
        name={'Journey'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => setSelectedCategory('Journey')} 
      />
    </div>
    {selectedCategory !== 'Journey' ? 
      <PieBarChart 
        barData={barFilterData} 
        pieData = {pieFilterData}
        barOptions={barOptions} 
        pieOptions={pieOptions}
        // additionalClass={styles.chartEx} 
      /> 
      : 
      <LineChart 
        data={lineFilterData} 
        options={lineOptions} 
        // additionalClass={styles.chartEx} 
      />
    }
  </div>
  )
}

export default Skills