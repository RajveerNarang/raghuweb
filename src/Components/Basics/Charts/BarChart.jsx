import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import skillData from '@json/frontend/skills.json';
import { barDataFilter, createBarChartOptions } from '@utils/charts';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

/**
 * Renders a bar chart component based on the selected category.
 *
 * @param {string} selectedCategory - The category to filter the data by.
 * @return {JSX.Element} The rendered bar chart component.
 */
const BarChart = ({selectedCategory}) => {
	
	const barData = barDataFilter(skillData, selectedCategory);
	const barOptions = createBarChartOptions()

	return <Bar 
		data={barData} 
		options={barOptions} 
	/>
}

export default BarChart
