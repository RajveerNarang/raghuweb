import React from 'react'
import { Pie } from 'react-chartjs-2'

import styles from '@components/Basics/Charts/chart.module.scss'

const PieChart2 = (props) => {
	const {data, options, additionalClass} = props
  return (
	<div className={`${styles.container} ${additionalClass}`} >
		<Pie 
			data={data}
			options={options} 
		/>
	</div>
  )
}

export default PieChart2