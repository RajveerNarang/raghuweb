import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

import skill from './skill.module.css'

function DoughnutChart() {
	ChartJS.register(...registerables);
	
	const doughnutData = {
		labels: [
			'HTML', 'CSS', 
			'JavaScript', 'React', 
			'Node.js', 'Python', 
			'Java','Bootstrap', 
			'JQuery', 'Tailwind-css', 
			'Github', 'SASS', 
			'Drupal'
		],
		datasets: [{
			label: 'Skill level',
			data: [
				90, 85, 
				70, 85, 
				65, 45,
				70, 40,
				45, 10,
				45, 5,
				15
			],
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
		<div className={skill.doughnut_size}>
			<Doughnut
				data={doughnutData}
				width={20}
				height={10}
				options={{
					maintainAspectRatio: false,
				}}
			/>
		</div>
	)
}

export default DoughnutChart