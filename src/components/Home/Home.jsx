import React from 'react'

import home from './home.module.css'
import Stars from './Stars'

function Home() {
	return (
		<div className={home.back_ground} >
			<Stars />
			<div className={home.intro_box}>
				<div className={home.info_name}>Hi,I'm Raghunandan</div>
				<div className={home.info_content}>
					I'm a Full Stack Developer, who have a great interest in frontend than backend developement
				</div>
			</div>
		</div>
	)
}

export default Home
