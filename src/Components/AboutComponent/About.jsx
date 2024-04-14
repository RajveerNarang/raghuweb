import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHeart, faCertificate, faFile } from '@fortawesome/free-solid-svg-icons';

import styles from '@components/AboutComponent/about.module.scss'
import AboutIconGrp from '@src/components/AboutComponent/AboutIconGrp';
import AboutContent from '@src/components/AboutComponent/AboutContent';

const About = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const refArray = useRef([])

	const data = [
		{
			icon: faGraduationCap,
			text: 'Education'
		},
		{
			icon: faCertificate,
			text: 'Achievements'
		},
		{
			icon: faHeart,
			text: 'Interests'
		}
	]
	const scrollToSection = (index) => {
		refArray.current[index]?.scrollIntoView({ behavior: 'smooth' });
	};
	
	  // Scroll to the section when currentIndex changes
	  useEffect(() => {
		scrollToSection(currentIndex);
	}, [currentIndex]);

  return (
    <div className={`${styles.container}`}>
		<div className={`${styles.icons}`}>
			<motion.a 
				initial={{ x: -50, opacity: 0 }}
				animate={{ 
					x: 0, 
					opacity: 1
				}}
				transition={{ duration: 0.3 }}
				className={`${styles.resume}`}
				href='/Files/Raghunandan_Sharma_Resume.pdf' 
				download
			>
				<FontAwesomeIcon icon={faFile} />
			</motion.a>
			<motion.div
				initial={{ x: -50, opacity: 0 }}
				animate={{ 
					x: 0, 
					opacity: 1
				}}
				transition={{ duration: 0.3 }}
				className={styles.iconGrp}
			>
				{data.map((item, index) => (
					<AboutIconGrp 
						key={index} 
						icon={item.icon}
						text={item.text} 
						setCurrentIndex={setCurrentIndex} 
						idx={index}
						isCurrent={currentIndex === index}
					/>
				))}
			</motion.div>
		</div>
		<div className={`${styles.contents}`}>
			{data.map((item, index) => (
				<AboutContent 
					key={index} 
					data={item}
					ref={(element) => (refArray.current[index] = element)}
				/>
			))}
		</div>
    </div>
  )
}

export default About

