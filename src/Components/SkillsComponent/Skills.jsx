import React, { useState } from 'react'
import { 
	Chart as ChartJS,
	BarElement,
	ArcElement,
  LineElement,
  PointElement,
	CategoryScale,
  TimeScale,
	LinearScale,
	Tooltip
} from "chart.js";

import 'chartjs-adapter-date-fns';

import { dataFilter, optionRender, lineOptionRender, lineDataFilter } from '@utils/charts';
import skillData from '@json/skills.json';
import styles from "@components/SkillsComponent/skill.module.scss";
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped';
import RenderedChart from '@components/SkillsComponent/RenderedChart';
import LineChart from '@components/Basics/Charts/LineChart'


const Skills = () => {
  ChartJS.register(
		BarElement,
		ArcElement,
    LineElement,
    PointElement,
		CategoryScale,
    TimeScale,
		LinearScale,
		Tooltip
	);

  const [selectedCategory, setSelectedCategory] = useState("Frontend")

  const filterData = dataFilter(skillData, selectedCategory);
	const options = optionRender()

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
      <RenderedChart categoryGrp={selectedCategory} data={filterData} options={options} additionalClass={styles.chartEx} /> 
      : 
      <LineChart data={lineFilterData} options={lineOptions} />
    }
  </div>
  )
}

export default Skills