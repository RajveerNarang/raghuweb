import React from 'react'
import {Link} from 'react-router-dom'

import home from '@src/v1Components/Home/home.module.css'
import Stars from '@src/v1Components/Home/Stars'

function Home() {
	return (
		<div className={home.background} >
			<div className={home.laptop_screen}>
				<Stars limit='275' />
				<div className={home.intro_box}>
					<div className={home.info_name}>GREETINGS EVERYONE</div>
					<div className={home.info_content}>
						<p>I'm Raghunandan, creator of this website.</p>
						<p>Main reason for creating this website is to learn and implement</p>
						<span>— Css animation</span>
						<span>— Canvas</span>
						<p>And to get to know a liitle about different animation tools like</p>
						<span>— Chart.js</span>
						<span>— AOS</span>
					</div>
				</div>
				<div className={home.nav_block_container}>
					<Link to='/v1/about' className={`${home.nav_block} ${home.about}`}>About</Link>
					<Link to='/v1/contact' className={`${home.nav_block} ${home.contact}`}>Contact</Link>
					<Link to='/v1/skills' className={`${home.nav_block} ${home.skills}`}>Skills</Link>
					<Link to='/v1/projects' className={`${home.nav_block} ${home.projects}`}>Projects</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
