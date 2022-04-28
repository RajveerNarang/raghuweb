import React from 'react'
import about from './about.module.css'

function Intro() {
  return (
	<div className={about.item_container}>
		<div 
			className={`${about.title} ${about.color0}`} 
			data-aos='fade-down'
		>
			Inroduction
		</div>
		<div className={about.body}>
			<div
				className={about.intro}
				data-aos='fade-down'
			>
				I'm Raghunandan, a Full Stack Developer, who is more interested in Frontend rather than Backend developement.
			</div>
		</div>
	</div>
  )
}

export default Intro