import React from 'react'

import styles from '@components/LoginComponent/login.module.scss'
import LoginForm from '@components/LoginComponent/LoginForm'
import GlassCard from '@components/Basics/GlassBox/GlassCard'

/**
 * Renders the Login component.
 *
 * @return {JSX.Element} The rendered Login component.
 */
const Login = () => {
	return (
		<div className={`${styles.container}`}>
			<GlassCard id='login' className={`${styles.login}`}>
				<LoginForm />
			</GlassCard>
		</div>
	)
}

export default Login
