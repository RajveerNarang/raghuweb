import React from 'react'
import about from './about.module.css'

function Certification() {
  return (
	<div className={about.item_container}>
		<div className={about.body}>
			<div
				className={about.certified}
				data-aos='zoom-in-up'
			>
				<div className={about.pair}>
					<p>Novate 2019</p>
					<span>
						Event held in our university. It was my first experience working as a team, and we presented Biometric Electing Voting machine (BEVM) in this event.
					</span>
				</div>
				<div className={about.pair}>
					<p>Full-Stack Web Development with React Specialization</p>
					<span>
						Got this certification by completing my course from Coursera offered by our university.
					</span>
				</div>
				<div className={about.pair}>
					<p>upGrad Certified</p>
					<span>
						Recently received this certification after completing my studies with upGrad also offered by our university.
					</span>
				</div>
			</div>
		</div>
		<div
			className={`${about.title} ${about.color3}`}
			data-aos='zoom-in-up'
		>
			Certifications
		</div>
	</div>
  )
}

export default Certification