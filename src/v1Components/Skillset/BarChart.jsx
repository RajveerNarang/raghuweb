import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

import skill from '@src/v1Components/Skillset/skill.module.css'

function BarChart() {

	ChartJS.register(...registerables);

	const barData = {
		labels: [
			'HTML', 
			'CSS', 
			'JavaScript', 
			'React', 
			'Node.js', 
			'Python', 
			'Java'
		],
		datasets: [{
			label: 'Skill level',
			data: [
				90, 
				85, 
				70, 
				85, 
				65,
				45,
				70
			],
			barPercentage: 0.5,
			backgroundColor: [
				'#cdaf00',
				'#45ff77',
				'#00ff55',
				'#ff7700',
				'#aaff33',
				'#b0f853',
				'#9372cd'
			]
		}]
	}
	
	return (
		<div className={skill.graph_size}>
			<Bar
				data={barData}
				width={10}
				height={20}
				options={{
					scales: {
						yAxes: {
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