import {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

import about from './about.module.css'

import Intro from './Intro';
import Education from './Education';
import Hobbies from './Hobbies';
import Resume from './Resume';
import Certification from './Certification';
import EmptyDiv from './EmptyDiv';

function About() {

	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}, [])
	
	return (
		<div className={about.background}>
			<div className={about.laptop_screen}>
				<Intro />
				<Education />
				<Hobbies />
				<Certification />
				<Resume />
				<EmptyDiv />
			</div>
			<div className={about.mobile_screen}>
				Website is not available for mobile version.
			</div>
		</div>
	)
}

export default About
