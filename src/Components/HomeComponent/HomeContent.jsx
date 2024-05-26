import React, { useState } from 'react'

import Header from '@components/Basics/Variables/Header'
import Paragraph from '@components/Basics/Variables/Paragraph'
import styles from '@components/HomeComponent/home.module.scss'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import OrderedList from '@components/Basics/Variables/OrderedList'
import Technologies from '@components/HomeComponent/Technologies'
import Methodologies from '@components/HomeComponent/Methodologies'
import Notice from '@components/HomeComponent/Notice'
import Contact from '@components/HomeComponent/Contact'

const lists = [
	'Technologies Utilized',
	'Methodologies Employed',
	'Important Notice',
	'Feedback'
]
/**
 * Renders the content of the home page.
 *
 * @return {JSX.Element} The rendered home content.
 */
const HomeContent = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(null)

	/**
	 * Opens the component by setting the `isOpen` state to `true` and the `currentIndex` state to the provided `index`.
	 *
	 * @param {number} index - The index of the component being opened.
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

	const getModal = (index) => {
		switch (index) {
			case 0:
				return <Technologies 
							isCurrentOpen={index === currentIndex && isOpen} 
							handleClose={handleClose}
							heading = {lists[currentIndex]}
						/>
			case 1:
				return <Methodologies 
							isCurrentOpen={index === currentIndex && isOpen}
							handleClose={handleClose}
							heading = {lists[currentIndex]}
						/>
			case 2:
				return <Notice 
							isCurrentOpen={index === currentIndex && isOpen}
							handleClose={handleClose}
							heading = {lists[currentIndex]}
						/>
			case 3:
				return <Contact
							isCurrentOpen={index === currentIndex && isOpen}
							handleClose={handleClose}
							heading = {lists[currentIndex]}
						/>
			default:
				return null
		}
	}

	return (
		<>
			<GlassCard id={'homeGlassCard'} className={`${styles.box}`}>
				<Header text={"Greetings Visitor!"} level={2} />
				<Paragraph className={'spacing'} content="This platform is designed to share insights and experiences from my journey. It's a place where I express myself and showcase my work. From technical tutorials to personal reflections, you'll find a variety of topics covered here."/>

				<OrderedList className={`${styles.list_group} grid`} lists={lists} openModal={handleOpen} />
			</GlassCard>
			{getModal(currentIndex)}
		</>
	)
}

export default HomeContent
