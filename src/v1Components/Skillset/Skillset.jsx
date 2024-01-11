import { useState, useEffect } from "react";

import BarChart from './BarChart';
import PieChart from './PieChart';
import DoughnutChart from "./DoughnutChart";

import skill from './skill.module.css'

function Skillset() {

	const [widthDimension, setWidthDimension] = useState(null)
	
	useEffect(() => {
	  setWidthDimension(window.innerWidth)
	}, [])

	useEffect(() => {
		const handleResize = () => {
			setWidthDimension(window.innerWidth);
		}
	
		window.addEventListener("resize", handleResize);
		
		return () => window.removeEventListener("resize", handleResize);
	}, [])


	return (
		<div className={skill.skill_background}>
			{ widthDimension >= 700 ? 
				<div className={skill.laptop_screen}>
					<BarChart />
					<PieChart />
					<div className={skill.description}>
						Level of skills I gained in these.
					</div>
				</div> :
				<div className={skill.laptop_screen}>
					<DoughnutChart />
					<div className={skill.description}>
						Level of skills I gained in these.
					</div>
				</div>
			}
		</div>
	)
}

export default Skillset
