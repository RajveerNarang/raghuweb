import React from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from '@components/Basics/Charts/chart.module.scss'
import BarChart from '@components/Basics/Charts/BarChart'
import PieChart from '@components/Basics/Charts/PieChart'

/**
 * Renders a PieBarChart component based on the props provided.
 *
 * @param {Object} props - Object containing selectedCategory and className properties.
 * @return {JSX.Element} The rendered PieBarChart component.
 */
const PieBarChart = (props) => {

	const isDesktop = useMediaQuery({minWidth: 767})
	const { selectedCategory, className } = props

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
