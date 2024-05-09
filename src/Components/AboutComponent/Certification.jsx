import React, { useState } from 'react'

import courseraImg from '@images/FullStackReactSpecialization.jpg'
import upgradImg from '@images/UpgradCertificate.jpg'
import ARImage from '@images/ARandARCore.jpg'
import CompNurImage from '@images/ComputationalNeuroscience.jpg'

import OrderedList from '@components/Basics/Variables/OrderedList'
import Paragraph from '@components/Basics/Variables/Paragraph'
import ImageModal from '@components/AboutComponent/ImageModal'

import styles from '@components/AboutComponent/about.module.scss'

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

const Certification = () => {

	const [isOpen, setIsOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(null)
	
	const handleOpen = (index) => {
		setIsOpen(true)
		setCurrentIndex(index)
	}
	const handleClose = () => {
		setIsOpen(false)
	}
  return (
	<>
		<Paragraph className={`${styles.text_center} spacing`} content="Presented here are my certificates and achievements, reflecting my commitment to ongoing growth and development. I anticipate this collection will expand with each new experience and opportunity I encounter." />
		<OrderedList className={`${styles.grid}`} lists={pdfFiles} openModal={handleOpen} />
		{pdfFiles.map((files, index) => (
			<ImageModal 
			key={index}
			isCurrentOpen={index === currentIndex && isOpen} 
			handleClose={handleClose}
			heading = {files.text}
			path = {files.file}
		/>
		))}
		
	</>
  )
}

export default Certification
