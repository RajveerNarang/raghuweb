import React from 'react'
import styles from './main.module.scss'
import Navbar from '../NavbarComponent/Navbar'

function Main() {
  return (
	<div className={`${styles.main}`}>
    <Navbar />
  </div>
  )
}

export default Main