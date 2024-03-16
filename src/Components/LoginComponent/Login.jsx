import React from 'react'

import styles from '@components/LoginComponent/login.module.scss'
import Input from '@components/Basics/Input/Input'
import GlassCard from '@components/Basics/GlassBox/GlassCard'

const Login = () => {
  return (
    <div className={`${styles.container}`}>
      <GlassCard id='login' additionalClass={`${styles.login}`}>
        <Input inputType="email" labelText="Email" inputNameId="email" />
      </GlassCard>
    </div>
  )
}

export default Login