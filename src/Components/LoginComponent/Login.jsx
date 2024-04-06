import React from 'react'

import styles from '@components/LoginComponent/login.module.scss'
import LoginForm from '@components/Basics/Form/LoginForm'
import GlassCard from '@components/Basics/GlassBox/GlassCard'

const Login = () => {
  return (
    <div className={`${styles.container}`}>
      <GlassCard id='login' additionalClass={`${styles.login}`}>
        <LoginForm />
      </GlassCard>
    </div>
  )
}

export default Login
