import React from 'react'
import { Bar } from 'react-chartjs-2'

import styles from '@components/Basics/Charts/chart.module.scss'

const BarChart2 = ({data}) => {
  return (
	<div className={styles.container}>
		<Bar data={data} />
	</div>
  )
}

export default BarChart2