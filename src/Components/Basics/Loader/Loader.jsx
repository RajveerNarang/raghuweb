import React from 'react'
import styles from '@components/Basics/Loader/loader.module.scss'

const Loader = () => {
  return (
	<div className={`${styles.load}`}>
		<div className={`${styles.dbl_spin__1}`}></div>
		<div className={`${styles.dbl_spin__2}`}></div>
	</div>
  )
}

export default Loader