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
				id={'menuBtn'}
				name={''} 
				iconClass={faPlus} 
				onClick={toggleNav} 
				additionalClass={`${isOpen ? styles.rotate45 : styles.rotate0}`}
			/>
		</div>
		<div className={`${styles.right}`}>
			<Link 
				to={`/`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'home'}
						name={'Home'} 
						iconClass={faHome} 
						additionalClass={`${isActive(location, '/') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/about`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'about'}
						name={'About'} 
						iconClass={faUser} 
						additionalClass={`${isActive(location, '/about') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/contact`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'contact'}
						name={'Contact'} 
						iconClass={faAddressCard} 
						additionalClass={`${isActive(location, '/contact') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/skills`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'skills'}
						name={'Skills'} 
						iconClass={faGears} 
						additionalClass={`${isActive(location, '/skills') ? styles.active: '' }`} 
					/>
			</Link>
			<Link 
				to={`/projects`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button 
						id={'projects'}
						name={'Projects'} 
						iconClass={faCode} 
						additionalClass={`${isActive(location, '/projects') ? styles.active: '' }`} 
					/>
			</Link>
		</div>
	</>
  )
}

export default MobileNav