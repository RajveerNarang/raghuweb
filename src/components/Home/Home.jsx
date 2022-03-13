import React from 'react'
import {Link} from 'react-router-dom'

import home from './home.module.css'
import Stars from './Stars'

function Home() {
	return (
		<div className={home.back_ground} >
			<div className={home.laptop_screen}>
				<Stars limit='275' />
				<div className={home.intro_box}>
					<div className={home.info_name}>GREETINGS EVERYONE</div>
					<div className={home.info_content}>
						<p>I'm Raghunandan, a Full Stack Developer, who have a great interest in frontend than backend developement.</p>
						<p>I love to showcase the results rather then errors.</p>
					</div>
				</div>
				<div className={home.nav_block_container}>
					<Link to='/about' className={`${home.nav_block} ${home.about}`}>About</Link>
					<Link to='/contact' className={`${home.nav_block} ${home.contact}`}>Contact</Link>
					<Link to='/skills' className={`${home.nav_block} ${home.skills}`}>Skills</Link>
					<Link to='/projects' className={`${home.nav_block} ${home.projects}`}>Projects</Link>
				</div>
			</div>
			<div className={home.mobile_screen}>
				Website is not available for this width.
			</div>
		</div>
	)
}

export default Home
