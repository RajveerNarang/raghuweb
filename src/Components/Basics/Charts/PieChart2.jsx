import React from 'react'
import { Pie } from 'react-chartjs-2'

import styles from '@components/Basics/Charts/chart.module.scss'

const PieChart2 = ({data}) => {
  return (
	<div className={styles.container} >
		<Pie data={data} />
	</div>
  )
}

export default PieChart2