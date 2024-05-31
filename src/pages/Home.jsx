import React from 'react'

import styles from '@components/HomeComponent/home.module.scss'
import HomeContent from '@components/HomeComponent/HomeContent'
import Button from '@components/Basics/Button/Button'
import { Link } from 'react-router-dom'
import { getAccessData } from '@utils/auth'

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
const Home = () => {
	const access = getAccessData()
	return (
		<div className={`${styles.container}`}>
			<HomeContent />
			{access?.role === 'admin' ? 
			<Link to={'/feedback'}>
				<Button attr={{style: {position: 'absolute', top: '5rem', left: 0}}} id='adminFeedback' name='Feedback' />
			</Link>
			: null}
		</div>
	)
}

export default Home
