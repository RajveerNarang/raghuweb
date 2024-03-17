import React from 'react'

import styles from '@components/LoginComponent/login.module.scss'
import Form from '@components/Basics/Form/Form'
import GlassCard from '@components/Basics/GlassBox/GlassCard'

const Login = () => {
  return (
    <div className={`${styles.container}`}>
      <GlassCard id='login' additionalClass={`${styles.login}`}>
        <Form />
      </GlassCard>
    </div>
  )
}

export default Login