
import BarChart from './BarChart'

import skill from './skill.module.css'
import Stars from '../Home/Stars'

function Skillset() {

	return (
		<div className={skill.skill_background}>
			<Stars limit='100' />
			<BarChart />
		</div>
	)
}

export default Skillset
