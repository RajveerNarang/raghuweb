import React, { lazy } from 'react'
import styles from '@components/MainComponent/main.module.scss'

const Navbar = lazy(() => import('@components/NavbarComponent/Navbar'))
const Routing = lazy(() => import('@components/MainComponent/Routing'))
// const Login = lazy(() => import('@components/LoginComponent/Login'))

function Main() {

  return (
	<main className={styles.container}>
    <Navbar />
    <Routing addClass={styles.router} />
  </main>
  )
}

export default Main