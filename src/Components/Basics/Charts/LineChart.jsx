import React from 'react'
import { Line } from 'react-chartjs-2'

import styles from '@components/Basics/Charts/chart.module.scss'

const LineChart = ({data}) => {
  return (
	<div className={styles.container}>
		<Line data={data} />
	</div>
  )
}

export default LineChart