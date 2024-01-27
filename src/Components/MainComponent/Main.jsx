import React, { lazy } from 'react'
// import styles from './main.module.scss'

const Navbar = lazy(() => import('@components/NavbarComponent/Navbar'))
const Routing = lazy(() => import('@components/MainComponent/Routing'))
// const Login = lazy(() => import('@components/LoginComponent/Login'))

function Main() {

  return (
	<>
    <Navbar />
    <Routing addStyle={{paddingTop: '12vh'}} />
  </>
  )
}

export default Main