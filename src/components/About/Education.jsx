import React from 'react'
import about from './about.module.css'

function Education() {
  return (
	<div className={about.item_container}>
		<div className={about.body}>
			<div
				className={about.education}
				data-aos='fade-right'
			>
				<p 
				// style={{textAlign: "center"}}
				>
					Will be graduating from
				</p>
				<span>Chitkara University</span>
				<span>Year: 2018 - 2022</span>
			</div>
		</div>
		<div
			className={`${about.title} ${about.color1}`}
			data-aos='fade-left'
		>
			Recent Education</div>
	</div>
  )
}

export default Education