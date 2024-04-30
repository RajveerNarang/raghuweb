import React from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from '@components/Basics/Charts/chart.module.scss'
import BarChart from '@components/Basics/Charts/BarChart'
import PieChart from '@components/Basics/Charts/PieChart'

const PieBarChart = (props) => {

	const isDesktop = useMediaQuery({minWidth: 767})

	const { selectedCategory, className } = props
	// console.log(barData, barOptions, pieData, pieOptions);
	return (
		<div className={`${styles.container} ${className || ''}`}>
			{isDesktop ? 
				<BarChart selectedCategory={selectedCategory} /> : 
				<PieChart selectedCategory={selectedCategory} />
			}
		</div>
	)
}

export default PieBarChart
