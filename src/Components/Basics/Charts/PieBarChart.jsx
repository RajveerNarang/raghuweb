import React from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from '@components/Basics/Charts/chart.module.scss'
import BarChart2 from '@components/Basics/Charts/BarChart2'
import PieChart2 from '@components/Basics/Charts/PieChart2'

const PieBarChart = (props) => {

	const isDesktop = useMediaQuery({minWidth: 767})

	const { selectedCategory, additionalClass } = props
	// console.log(barData, barOptions, pieData, pieOptions);
	return (
		<div className={`${styles.container} ${additionalClass || ''}`}>
			{isDesktop ? 
				<BarChart2 selectedCategory={selectedCategory} /> : 
				<PieChart2 selectedCategory={selectedCategory} />
			}
		</div>
	)
}

export default PieBarChart