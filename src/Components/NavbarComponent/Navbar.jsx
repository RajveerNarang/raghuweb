import React from 'react'
import { Link } from 'react-router-dom'
import { faAddressCard, faCode, faGears, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

import Button from '../Basics/Button/Button'
import styles from './navbar.module.scss'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {

	const isDesktop = useMediaQuery({minWidth: 767})

  return (
	<nav className={`${styles.navbar}`}>
		<div className={`${styles.left}`}>
			{isDesktop ? 
			<Link to={`/`} className={`${styles.container}`}>
				<Button name={'Home'} iconClass={faHome} />
			</Link> 
			: <Button name={''} iconClass={faPlus} /> }
		</div>
		<div className={`${styles.right}`}>
			{isDesktop ? null : 
			<Link to={`/`} className={`${styles.container}`}>
				<Button name={'Home'} iconClass={faHome} />
			</Link>}
			<Link to={`/about`} className={`${styles.container}`}>
				<Button name={'About'} iconClass={faUser} />
			</Link>
			<Link to={`/contact`} className={`${styles.container}`}>
				<Button name={'Contact'} iconClass={faAddressCard} />
			</Link>
			<Link to={`/skills`} className={`${styles.container}`}>
				<Button name={'Skills'} iconClass={faGears} />
			</Link>
			<Link to={`/projects`} className={`${styles.container}`}>
				<Button name={'Projects'} iconClass={faCode} />
			</Link>
		</div>
	</nav>
  )
}

export default Navbar