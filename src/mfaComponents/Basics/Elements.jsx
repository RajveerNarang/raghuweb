import React from 'react'
import Button from './Button/Button'
import styles from './element.module.scss'
import { faGear, faHome, faPlus } from '@fortawesome/free-solid-svg-icons'

const Elements = () => {
  return (
	<div className={`${styles.container}`}>
		<Button iconClass={faPlus} name={'plus'} onClick={console.log('Plus')} />
		<Button iconClass={faHome} name={'Home'} onClick={console.log('Home')} />
		<Button iconClass={faGear} name={'Gear'} onClick={console.log('Gear')} />
	</div>
  )
}

export default Elements