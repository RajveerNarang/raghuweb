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
			<Intro />
			<Education />
			<Hobbies />
			<Certification />
			<Resume />
			<EmptyDiv />
		</div>
	)
}

export default About
