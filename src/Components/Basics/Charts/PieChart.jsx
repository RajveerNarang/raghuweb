import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

import skillData from '@json/frontend/skills.json';
import { pieDataFilter, createPieChartOptions } from '@utils/charts';

ChartJS.register(ArcElement, Tooltip, Legend)

/**
 * Renders a pie chart component.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.selectedCategory - The selected category for the pie chart.
 * @return {JSX.Element} The pie chart component.
 */
const PieChart = ({ selectedCategory }) => {
	
	const pieData = pieDataFilter(skillData, selectedCategory);
	const pieOptions = createPieChartOptions()

	return <Pie 
		data={pieData} 
		options={pieOptions} 
	/>
}

export default PieChart
