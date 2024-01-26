import React from 'react'
import about from '@src/v1Components/About/about.module.css'

function Certification() {
  return (
	<div className={about.item_container}>
		<div className={about.certify_body}>
			<div className={about.flex_container}>
				<div
					className={about.certified}
					data-aos='zoom-in-up'
				>
					<div className={about.pair}>
						<p>upGrad Certified</p>
						<span>
							Recently received this certification after completing my studies with upGrad also offered by our university.
						</span>
					</div>
				</div>
				<div
					className={`${about.title} ${about.color3}`}
					data-aos='zoom-in-up'
				>
					Certifications
				</div>
			</div>
			<div className={about.flex_container}>
				<div
					className={about.certified}
					data-aos='zoom-in-up'
				>
					<div className={about.pair}>
						<p>Full-Stack Web Development with React Specialization</p>
						<span>
							Got this certification by completing my course from Coursera offered by our university.
						</span>
					</div>
				</div>
				<div
					className={about.certified}
					data-aos='zoom-in-up'
				>
					<div className={about.pair}>
						<p>Novate 2019</p>
						<span>
							Event held in our University.
							It was my first experience working with a team. We got the opportunity to represent our project Biometric Electing Voting machine (BEVM) in this event.
						</span>
					</div>
				</div>
			</div>
			
		</div>
		
	</div>
  )
}

export default Certification