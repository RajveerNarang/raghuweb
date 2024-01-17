import React from 'react'
import { Link } from 'react-router-dom'
import { faAddressCard, faCode, faGears, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

import styles from '@components/NavbarComponent/navbar.module.scss'
import Button from '@components/Basics/Button/Button'

const DesktopNav = () => {
  return (
	<>
		<div className={`${styles.left}`}> 
			<Link to={`/`}>
				<Button name={'Home'} iconClass={faHome} />
			</Link>
		</div>
		<div className={`${styles.right}`}>
			<Link to={`/about`}>
				<Button name={'About'} iconClass={faUser} />
			</Link>
			<Link to={`/contact`}>
				<Button name={'Contact'} iconClass={faAddressCard} />
			</Link>
			<Link to={`/skills`}>
				<Button name={'Skills'} iconClass={faGears} />
			</Link>
			<Link to={`/projects`}>
				<Button name={'Projects'} iconClass={faCode} />
			</Link>
		</div>
	</>
  )
}

export default DesktopNav