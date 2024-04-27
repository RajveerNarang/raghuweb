import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { faAddressCard, faArrowRightFromBracket, faArrowRightToBracket, faCode, faGears, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

import styles from '@components/NavbarComponent/navbar.module.scss'
import Button from '@components/Basics/Button/Button'
import { isActive } from '@utils/navbar'
import { getAccessData, removeAccessData } from '@utils/auth'

const DesktopNav = () => {
	const location = useLocation()
	const data = getAccessData()

  return (
	<>
		<div className={`${styles.left}`}> 
			<Link to={`/`}>
				<Button 
					id={'home'}
					name={'Home'} 
					iconName={faHome}
					className={`${isActive(location, '/') ? styles.active: '' }`}
				/>
			</Link>
		</div>
		<div className={`${styles.right}`}>
			<Link to={`/about`}>
				<Button 
					id={'about'}
					name={'About'} 
					iconName={faUser}
					className={`${isActive(location, '/about') ? styles.active: '' }`}
				/>
			</Link>
			<Link to={`/contact`}>
				<Button 
					id={'contact'}
					name={'Contact'} 
					iconName={faAddressCard}
					className={`${isActive(location, '/contact') ? styles.active: '' }`}
				/>
			</Link>
			<Link to={`/skills`}>
				<Button 
					id={'skills'}
					name={'Skills'} 
					iconName={faGears}
					className={`${isActive(location, '/skills') ? styles.active: '' }`}
				/>
			</Link>
			<Link to={`/projects`}>
				<Button 
					id={'projects'}
					name={'Projects'} 
					iconName={faCode}
					className={`${isActive(location, '/projects') ? styles.active: '' }`}
				/>
			</Link>
			
			{data?.isLoggedIn ? <Link 
				to={`#`} >
					<Button 
						id={'logout'}
						name={'Logout'} 
						iconName={faArrowRightFromBracket}
						onClick={() => removeAccessData()}
					/>
			</Link> : <Link 
				to={`/login`} >
					<Button 
						id={'login'}
						name={'Login'} 
						iconName={faArrowRightToBracket} 
						className={`${isActive(location, '/login') ? styles.active: '' }`} 
					/>
			</Link>
			}
		</div>
	</>
  )
}

export default DesktopNav
