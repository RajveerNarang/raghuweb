import React from 'react'
import { 
	Chart as ChartJS,
	registerables
  } from "chart.js";  
import { useMediaQuery } from 'react-responsive';

import BarChart2 from '@components/Basics/Charts/BarChart2';
import LineChart from '@components/Basics/Charts/LineChart';
import PieChart2 from '@components/Basics/Charts/PieChart2';
import styles from "@components/SkillsComponent/skill.module.scss";

const RenderedChart = (props) => {
	ChartJS.register(...registerables);
	const isDesktop = useMediaQuery({minWidth: 767})

	const {categoryGrp, data, options} = props
  return (
	<>
		{
			categoryGrp === "Journey" ? 
			<LineChart 
				data={data} 
				options={options} 
				additionalClass={styles.chartEx}
			/> : 
			isDesktop ? 
				<BarChart2 
					data={data} 
					options={options} 
					additionalClass={styles.chartEx}
				/> : 
				<PieChart2 
					data={data} 
					options={options} 
					additionalClass={styles.chartEx}
				/>
		}

	</>
  )
}

export default RenderedChart