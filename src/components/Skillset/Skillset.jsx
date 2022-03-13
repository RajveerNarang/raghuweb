import BarChart from './BarChart'
import PieChart from './PieChart'

import skill from './skill.module.css'

function Skillset() {

	return (
		<div className={skill.skill_background}>
			<div className={skill.laptop_screen}>
				<BarChart />
				<PieChart />
				<div className={skill.description}>
					Level of skills I gained in these languages.
				</div>
			</div>
			<div className={skill.mobile_screen}>
				Skill level is not available for mobile screen.
			</div>
		</div>
	)
}

export default Skillset
