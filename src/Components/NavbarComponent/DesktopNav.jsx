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
					id={'home'}
					name={'Home'} 
					iconClass={faHome}
					additionalClass={`${isActive(location, '/') ? styles.active: '' }`}
				/>
			</Link>
		</div>
		<div className={`${styles.right}`}>
			<Link to={`/about`}>
				<Button 
					id={'about'}
					name={'About'} 
					iconClass={faUser}
					additionalClass={`${isActive(location, '/about') ? styles.active: '' }`}
				/>
			</Link>
			<Link to={`/contact`}>
				<Button 
					id={'contact'}
					name={'Contact'} 
					iconClass={faAddressCard}
					additionalClass={`${isActive(location, '/contact') ? styles.active: '' }`}
				/>
			</Link>
			<Link to={`/skills`}>
				<Button 
					id={'skills'}
					name={'Skills'} 
					iconClass={faGears}
					additionalClass={`${isActive(location, '/skills') ? styles.active: '' }`}
				/>
			</Link>
			<Link to={`/projects`}>
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

export default DesktopNav