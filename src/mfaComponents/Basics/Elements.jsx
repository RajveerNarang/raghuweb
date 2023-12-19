import React from 'react'
import Button from './Button/Button'
import styles from './element.module.scss'

export default function Elements() {
  return (
	<div className={`${styles.container}`}>
		<Button name={'This is a test'} />
		<Button name={'This is a test 2'} shape={'circle'}/>
	</div>
  )
}
