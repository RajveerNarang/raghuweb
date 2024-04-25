import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { faAddressCard, faArrowRightToBracket, faCode, faGears, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

import styles from '@components/NavbarComponent/navbar.module.scss'
import Button from '@components/Basics/Button/Button'
import { isActive } from '@utils/navbar'

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()

	const toggleNav = () => {
		setIsOpen(!isOpen)
	}

  return (
	<>
		<div className={`${styles.left}`}>
			<Button 
				id={'menuBtn'}
				name={''} 
				iconName={faPlus} 
				onClick={toggleNav} 
				className={`${isOpen ? styles.rotate45 : styles.rotate0}`}
			/>
		</div>
		<div className={`${styles.right}`}>
			<Link 
				to={`/`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'home'}
						name={'Home'} 
						iconName={faHome} 
						className={`${isActive(location, '/') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/about`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'about'}
						name={'About'} 
						iconName={faUser} 
						className={`${isActive(location, '/about') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/contact`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'contact'}
						name={'Contact'} 
						iconName={faAddressCard} 
						className={`${isActive(location, '/contact') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/skills`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'skills'}
						name={'Skills'} 
						iconName={faGears} 
						className={`${isActive(location, '/skills') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/projects`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'projects'}
						name={'Projects'} 
						iconName={faCode} 
						className={`${isActive(location, '/projects') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/login`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'login'}
						name={'Login'} 
						iconName={faArrowRightToBracket} 
						className={`${isActive(location, '/login') ? styles.active: '' }`} 
					/>
			</Link>
		</div>
	</>
  )
}

export default MobileNav
