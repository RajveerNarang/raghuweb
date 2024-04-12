import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHeart, faCertificate, faFile } from '@fortawesome/free-solid-svg-icons';

import styles from '@components/AboutComponent/about.module.scss'
import AboutIconGrp from '@src/components/AboutComponent/AboutIconGrp';
import AboutContent from '@src/components/AboutComponent/AboutContent';
import aboutData from '@json/frontend/about.json'

const About = () => {
	const [currentIndex, setCurentIndex] = useState(0)
	
	const getIcon = (text) => {
		switch (text) {
		  case 'Education': return faGraduationCap;
		  case 'Achievements': return faCertificate;
		  case 'Interests': return faHeart;
		  default: return null;
		}
	  }

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
				{aboutData.map((item, index) => (
					<AboutIconGrp 
						key={index} 
						icon={getIcon(item.text)}
						text={item.text} 
						setCurentIndex={setCurentIndex} 
						idx={index}
						isCurrent={currentIndex === index}
					/>
				))}
			</motion.div>
		</div>
		<div className={`${styles.contents}`}>
			<AboutContent>
				<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit ratione in, maxime maiores ducimus perferendis commodi sint omnis dolore laborum perspiciatis, odio praesentium qui, quos deleniti incidunt ut deserunt?</div>
			</AboutContent>
			<AboutContent>
				<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit ratione in, maxime maiores ducimus perferendis 
					
					commodi sint omnis dolore laborum perspiciatis, odio praesentium qui, quos deleniti incidunt ut deserunt?</div>
			</AboutContent>
		</div>
    </div>
  )
}

export default About

