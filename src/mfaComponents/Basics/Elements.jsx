import React from 'react'
import Button from './Button/Button'
import styles from './element.module.scss'
import { faGear, faHome, faPlus } from '@fortawesome/free-solid-svg-icons'
import Input from './Input/Input'
import GlassCard from './GlassBox/GlassCard'

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
		<div className={`${styles.flex__right}`}>
			<GlassCard width={'100vw'} height={'25vw'}>
				<Input inputType={'text'} labelText={'Name'} inputNameId={'name'} />
			</GlassCard>
			<GlassCard>
				<h2>Heading 2</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut consectetur voluptatibus saepe id exercitationem esse, modi optio quaerat dolores!</p>
			</GlassCard>
		</div>
	</div>
  )
}

export default Elements