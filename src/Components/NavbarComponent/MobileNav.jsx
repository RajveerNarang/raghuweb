import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faAddressCard, faCode, faGears, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

import styles from '@components/NavbarComponent/navbar.module.scss'
import Button from '@components/Basics/Button/Button'

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleNav = () => {
		setIsOpen(!isOpen)
	}
  return (
	<>
		<div className={`${styles.left}`}>
			<Button name={''} iconClass={faPlus} onClick={toggleNav} addClass={`${isOpen ? styles.rotate45 : styles.rotate0}`}
			/>
		</div>
		<div className={`${styles.right}`}>
			<Link 
				to={`/`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button name={'Home'} iconClass={faHome} />
			</Link>
			<Link 
				to={`/about`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button name={'About'} iconClass={faUser} />
			</Link>
			<Link 
				to={`/contact`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button name={'Contact'} iconClass={faAddressCard} />
			</Link>
			<Link 
				to={`/skills`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button name={'Skills'} iconClass={faGears} />
			</Link>
			<Link 
				to={`/projects`} 
				className={`${styles.navItem} ${isOpen ? styles.navItemShow : styles.navItemHide}`}>
					<Button name={'Projects'} iconClass={faCode} />
			</Link>
		</div>
	</>
  )
}

export default MobileNav