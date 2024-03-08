import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const BarChart2 = ({ data, options }) => {
	return <Bar data={data} options={options} />
}

export default BarChart2