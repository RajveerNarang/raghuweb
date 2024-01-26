import {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

import about from '@src/v1Components/About/about.module.css'

import Intro from '@src/v1Components/About/Intro';
import Education from '@src/v1Components/About/Education';
import Hobbies from '@src/v1Components/About/Hobbies';
import Resume from '@src/v1Components/About/Resume';
import Certification from '@src/v1Components/About/Certification';

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
			</div>
		</div>
	)
}

export default About
