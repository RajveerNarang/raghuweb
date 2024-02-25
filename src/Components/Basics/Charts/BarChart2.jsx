import React from 'react'
import { Bar } from 'react-chartjs-2'

import styles from '@components/Basics/Charts/chart.module.scss'

const BarChart2 = (props) => {

	const {data, options, additionalClass} = props
  return (
	<div className={`${styles.container} ${additionalClass || ''}`}>
		<Bar 
			data={data} 
			options={options}
		/>
	</div>
  )
}

export default BarChart2