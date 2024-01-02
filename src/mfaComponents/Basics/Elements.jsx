import React from 'react'
import Button from './Button/Button'
import styles from './element.module.scss'
import { faGear, faHome, faPlus } from '@fortawesome/free-solid-svg-icons'
import Input from './Input/Input'

const Elements = () => {
  return (
	<div className={`${styles.container}`}>
		<div className={`${styles.flex__right}`}>
			<Button iconClass={faPlus} name={'plus'} onClick={console.log('Plus')} />
			<Button iconClass={faHome} name={'Home'} onClick={console.log('Home')} />
			<Button iconClass={faGear} name={'Gear'} onClick={console.log('Gear')} />
		</div>
		<div className={`${styles.flex__right}`}>
			<Input inputType={'text'} labelText={'Name'} inputNameId={'name'} />
			<Input inputType={'email'} labelText={'Email'} inputNameId={'email'} />
		</div>
	</div>
  )
}

export default Elements