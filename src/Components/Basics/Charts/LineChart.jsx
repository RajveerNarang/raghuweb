import React from 'react'
import { Chart as ChartJS, LineElement, PointElement, TimeScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'

import styles from '@components/Basics/Charts/chart.module.scss'
import journeyData from '@json/db/journey.json';
import { 
  createLineChartOptions, lineDataFilter
} from '@utils/charts';

ChartJS.register(LineElement, PointElement, TimeScale, LinearScale, Tooltip, Legend)

const LineChart = ({additionalClass}) => {
	
	const lineData = lineDataFilter(journeyData);
	const lineOptions = createLineChartOptions(journeyData)

	// console.log(lineData.labels);

	return (
		<div className={`${styles.container} ${additionalClass || ''}`}>
			<Line 
				data={lineData} 
				options={lineOptions}/>
		</div>
	)
}

export default LineChart
