import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

import skill from './skill.module.css'

function PieChart() {
	ChartJS.register(...registerables);
	
	const pieData = {
		labels: ['Bootstrap', 'JQuery', 'Tailwind-css', 'Github', 'SASS', 'Drupal'],
		datasets: [{
			label: 'Skill level',
			data: [20, 15, 10, 15, 25, 15],
			barPercentage: 0.5,
			backgroundColor: [
				'#ff2500',
				'#ff5500',
				'#0fcf25',
				'#00bfcf',
				'#f9a2c5',
				'#dc143c'
			]
		}]
	}

	return (
		<div className={skill.pie_size}>
			<Pie
				data={pieData}
				width={10}
				height={20}
				options={{
					maintainAspectRatio: false,
				}}
			/>
		</div>
	)
}

export default PieChart