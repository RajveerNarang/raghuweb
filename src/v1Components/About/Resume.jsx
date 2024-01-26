import React from 'react'
import { Link } from 'react-router-dom'
import about from '@src/v1Components/About/about.module.css'

function Resume() {
  return (
	<div className={about.item_container}>
		<div
			className={`${about.title} ${about.color4}`}
			data-aos='zoom-in-up'
		>
			Resume
		</div>
		<div className={about.body}>
			<div
				className={about.resume}
				data-aos='zoom-in-up'
			>
				<Link 
					to='/Files/raghunandan_sharma.pdf'
					className={about.color4} 
					target='_blank' 
					download
				>
					Download
				</Link>
			</div>
		</div>
	</div>
  )
}

export default Resume