import React from 'react'
import PropTypes from 'prop-types'
import styles from '@components/Basics/GlassBox/glass.module.scss'

const GlassCard = ({ children, width, height }) => {
  return (
	<section className={styles.container} style={{width, height}}>
		{/* <span className={`${styles.box}`}></span> */}
		{children}
	</section>
  )
}

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlassCard