import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { 
	Chart as ChartJS,
	BarElement,
	ArcElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
} from "chart.js";

import { Bar, Pie } from 'react-chartjs-2'

import styles from '@components/Basics/Charts/chart.module.scss'

ChartJS.register(
	BarElement,
	ArcElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend
);

const PieBarChart = (props) => {

	const isDesktop = useMediaQuery({minWidth: 767})

	const {
		barData, barOptions, 
		pieData, pieOptions, 
		additionalClass
	} = props

	return (
		<div className={`${styles.container} ${additionalClass || ''}`}>
			{isDesktop ? 
				<Bar 
					data={barData} 
					options={barOptions}
				/> : 
				<Pie 
					data={pieData}
					options={pieOptions} 
				/>
			}
		</div>
	)
}

export default PieBarChart