import React from 'react'
import about from '@src/v1Components/About/about.module.css'

function Hobbies() {
  return (
	<div className={about.item_container}>
		<div
			className={`${about.title} ${about.color2}`}
			data-aos='zoom-in-up'
		>
			Hobbies
		</div>
		<div className={about.body}>
			<div 
				className={about.list}
				data-aos='zoom-in-up'
			>
				<p>What I like to do in my free time</p>
				<span>— Watching anime.</span>
				<span>— Playing games.</span>
				<span>— Learn to animate using code in js (Uncommon).</span>
				<span>— Learn languages from Duolingo (Rare).</span>
			</div>
		</div>
	</div>
  )
}

export default Hobbies