import React from 'react'
import { useMediaQuery } from 'react-responsive';

import BarChart2 from '@components/Basics/Charts/BarChart2';
import PieChart2 from '@components/Basics/Charts/PieChart2';
import styles from "@components/SkillsComponent/skill.module.scss";

const RenderedChart = (props) => {
	const isDesktop = useMediaQuery({minWidth: 767})

	const {data, options} = props
  return (
	<>
		{
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