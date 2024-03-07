import React from 'react'
import { 
	Chart as ChartJS,
	LineElement,
	PointElement,
	TimeScale,
	LinearScale,
	Tooltip,
	Legend
} from "chart.js";

import { Line } from 'react-chartjs-2'

import styles from '@components/Basics/Charts/chart.module.scss'

ChartJS.register(
	LineElement,
	PointElement,
	TimeScale,
	LinearScale,
	Tooltip,
	Legend
);
const LineChart = (props) => {

	const {data, options, additionalClass} = props
	return (
		<div className={`${styles.container} ${additionalClass || ''}`}>
			<Line 
				data={data} 
				options={options}/>
		</div>
	)
}

export default LineChart