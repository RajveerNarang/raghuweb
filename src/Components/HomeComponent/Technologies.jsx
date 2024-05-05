import React from 'react'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'
import UnorderedList from '@components/Basics/Variables/UnorderedList'

import styles from '@components/HomeComponent/home.module.scss'

const Technologies = (props) => {
	const lists = [
		{
			text: 'NodeJS'
		},
		{
			text: 'ExpressJS'
		},
		{
			text: 'ReactJS'
		},
		{
			text: 'Framer Motion'
		},
		{
			text: 'SASS / SCSS'
		},
		{
			text: 'HTML Canvas'
		},
		{
			text: 'Vertical React Timeline'
		},
		{
			text: 'Vite (instead of CRA)'
		}
	]
	const { isCurrentOpen, handleClose, heading } = props
  return (
	<Modal
		isOpen={isCurrentOpen}
		onClose={handleClose}
		heading={heading}
	>
		<Paragraph content="I applied various methodologies and techniques, such as adopting a mobile-first approach, emphasizing component reusability, and leveraging absolute paths. Additionally, I integrated cutting-edge technologies to enhance the functionality and performance of the platform." />
		<UnorderedList className={styles.list_group} lists={lists}/>
	</Modal>
  )
}

export default Technologies
