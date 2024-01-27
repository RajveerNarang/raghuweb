import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { faAddressCard, faCode, faGears, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

import styles from '@components/NavbarComponent/navbar.module.scss'
import Button from '@components/Basics/Button/Button'
import { isActive } from '@components/NavbarComponent/utils'

const DesktopNav = () => {
	const location = useLocation()
  return (
	<>
		<div className={`${styles.left}`}> 
			<Link to={`/`}>
				<Button 
					name={'Home'} 
					iconClass={faHome}
					addClass={`${isActive(location, '/') ? styles.active: '' }`}
				/>
			</Link>
		</div>
		<div className={`${styles.right}`}>
			<Link to={`/about`}>
				<Button 
					name={'About'} 
					iconClass={faUser}
					addClass={`${isActive(location, '/about') ? styles.active: '' }`}
				/>
			</Link>
			<Link to={`/contact`}>
				<Button 
					name={'Contact'} 
					iconClass={faAddressCard}
					addClass={`${isActive(location, '/contact') ? styles.active: '' }`}
				/>
			</Link>
			<Link to={`/skills`}>
				<Button 
					name={'Skills'} 
					iconClass={faGears}
					addClass={`${isActive(location, '/skills') ? styles.active: '' }`}
				/>
			</Link>
			<Link to={`/projects`}>
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

export default DesktopNav