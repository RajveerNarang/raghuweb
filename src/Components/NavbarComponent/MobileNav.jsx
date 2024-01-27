import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { faAddressCard, faCode, faGears, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

import styles from '@components/NavbarComponent/navbar.module.scss'
import Button from '@components/Basics/Button/Button'
import { isActive } from '@components/NavbarComponent/utils'

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
				name={''} 
				iconClass={faPlus} 
				onClick={toggleNav} 
				addClass={`${isOpen ? styles.rotate45 : styles.rotate0}`}
			/>
		</div>
		<div className={`${styles.right}`}>
			<Link 
				to={`/`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						name={'Home'} 
						iconClass={faHome} 
						addClass={`${isActive(location, '/') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/about`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						name={'About'} 
						iconClass={faUser} 
						addClass={`${isActive(location, '/about') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/contact`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						name={'Contact'} 
						iconClass={faAddressCard} 
						addClass={`${isActive(location, '/contact') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/skills`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						name={'Skills'} 
						iconClass={faGears} 
						addClass={`${isActive(location, '/skills') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/projects`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						name={'Projects'} 
						iconClass={faCode} 
						addClass={`${isActive(location, '/projects') ? styles.active: '' }`} 
					/>
			</Link>
		</div>
	</>
  )
}

export default MobileNav