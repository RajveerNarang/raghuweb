import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

import skillData from '@json/frontend/skills.json';
import { 
  pieDataFilter, createPieChartOptions
} from '@utils/charts';

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart2 = ({ selectedCategory }) => {
	
	const pieData = pieDataFilter(skillData, selectedCategory);
	const pieOptions = createPieChartOptions()

	// console.log(pieData.labels)

	return <Pie 
		data={pieData} 
		options={pieOptions} 
	/>
}

export default PieChart2
