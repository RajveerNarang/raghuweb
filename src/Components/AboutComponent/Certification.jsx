import React, { useState } from 'react'

import courseraImg from '@images/FullStackReactSpecialization.jpg'
import upgradImg from '@images/UpgradCertificate.jpg'
import ARImage from '@images/ARandARCore.jpg'
import CompNurImage from '@images/ComputationalNeuroscience.jpg'

import OrderedList from '@components/Basics/Variables/OrderedList'
import Paragraph from '@components/Basics/Variables/Paragraph'
import ImageModal from '@components/AboutComponent/ImageModal'

import styles from '@components/AboutComponent/about.module.scss'
import { useMediaQuery } from 'react-responsive'

const pdfFiles = [
	{
		text: 'Full-Stack Web Development with React Specialization',
		file: courseraImg
	},
	{
		text: 'Upgrad Certificate',
		file: upgradImg
	},
	{
		text: 'Introduction to Augmented Reality and ARCore',
		file: ARImage
	},
	{
		text: 'Computational Neuroscience',
		file: CompNurImage
	}
]

/**
 * Renders the Certification component with certificates and achievements.
 *
 * @param {number} index - The index of the certificate being opened.
 * @return {JSX.Element} The rendered Certification component.
 */
const Certification = () => {

	const [isOpen, setIsOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(null)
	const isDesktop = useMediaQuery({minWidth: 767})
	
	/**
	 * Opens the component by setting the `isOpen` state to `true` and the `currentIndex` state to the provided `index`.
	 *
	 * @param {number} index - The index of the certificate being opened.
	 * @return {void} This function does not return anything.
	 */
	const handleOpen = (index) => {
		setIsOpen(true)
		setCurrentIndex(index)
	}

	/**
	 * Closes the component by setting the `isOpen` state to `false`.
	 *
	 * @return {void} This function does not return anything.
	 */
	const handleClose = () => {
		setIsOpen(false)
	}

	return (
		<>
			<Paragraph className={`${styles.text_center}`} content="Presented here are my certificates and achievements, reflecting my commitment to ongoing growth and development. I anticipate this collection will expand with each new experience and opportunity I encounter." />
			<OrderedList className={`${isDesktop ? styles.grid : 'grid'} ${styles.text_center}`} lists={pdfFiles} openModal={handleOpen} />
			{pdfFiles.map((files, index) => (
				<ImageModal 
				key={index}
				isCurrentOpen={index === currentIndex && isOpen} 
				handleClose={handleClose}
				heading = {files.text}
				path = {files.file}
			/>
			))}
			<Paragraph bold="Storybook Exploration: " content="I was entrusted with the responsibility of investigating Storybook's capabilities, particularly focusing on actions and controls, to determine its feasibility for integration with our Drupal website. Through this exploration, I was able to gain a comprehensive understanding of the technology and its potential benefits and shared my findings with the team." />
		</>
	)
}

export default Certification
