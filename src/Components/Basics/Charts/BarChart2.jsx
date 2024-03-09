import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import skillData from '@json/skills.json';
import { 
  barDataFilter, createBarChartOptions
} from '@utils/charts';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const BarChart2 = ({selectedCategory}) => {
	
	const barData = barDataFilter(skillData, selectedCategory);
	const barOptions = createBarChartOptions()

	// console.log(barData.labels)

	return <Bar 
		data={barData} 
		options={barOptions} 
	/>
}

export default BarChart2