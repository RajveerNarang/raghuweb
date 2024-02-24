import React from 'react'
import { Line } from 'react-chartjs-2'

import styles from '@components/Basics/Charts/chart.module.scss'

const LineChart = (props) => {
	const {data, options, additionalClass} = props
  return (
	<div className={`${styles.container} ${additionalClass}`}>
		<Line 
			data={data} 
			options={options}/>
	</div>
  )
}

export default LineChart