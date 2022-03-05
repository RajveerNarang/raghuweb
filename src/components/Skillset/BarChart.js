import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

import skill from './skill.module.css'

function BarChart() {

	ChartJS.register(...registerables);

	const barData = {
		labels: ['HTML', 'CSS', 'JavaScript', 'Java', 'React', 'Node.js', 'Python'],
		datasets: [{
			label: 'Skill level',
			data: [90, 85, 70, 55, 80, 70, 40],
			barPercentage: 0.5,
			backgroundColor: [
				'#9acd32',
				'#df0ef1',
				'#f1b40e'
			]
		}]
	}
	
	return (
		<div className={skill.graph_size}>
			<Bar
				data={barData}
				width={100}
				height={150}
				options={{
					scales: {
						y: {
							beginAtZero: true,
							min: 0,
							max: 100
						}
					},
					maintainAspectRatio: false,
				}}
			/>
		</div>
	)
}

export default BarChart