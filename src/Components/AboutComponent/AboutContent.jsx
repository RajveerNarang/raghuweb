import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import styles from '@components/AboutComponent/about.module.scss'
import Education from '@components/AboutComponent/Education'
import Interests from '@components/AboutComponent/Interests'
import Certification from '@components/AboutComponent/Certification'

const AboutContent = forwardRef((props, ref) => {
	const {data, className} = props

	/**
	 * A function that returns JSX components based on the provided text.
	 *
	 * @param {string} text - The text used to determine which component to render.
	 * @return {JSX} The JSX component based on the text provided.
	 */
	const getContent = (text) => {
		
		switch (text) {
			case 'Education':
				return <Education />
			case 'Interests':
				return <Interests />
			case 'Achievements':
				return <Certification />
			default:
				return null
		}
	}
	
	return (
		<motion.section 
			className={`${styles.content_box} ${className || ''}`}
			ref={ref}
			initial={{ opacity: 0, y: 200 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{getContent(data.text)}
		</motion.section>
	)
})

AboutContent.propTypes = {
	data: PropTypes.object.isRequired
};

export default AboutContent
