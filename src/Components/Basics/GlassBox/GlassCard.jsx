import React from 'react'
import PropTypes from 'prop-types'
import styles from '@components/Basics/GlassBox/glass.module.scss'

const GlassCard = ({ children, additionalClass }) => {
  return (
	<section className={`${styles.container} ${additionalClass}`}>
		{children}
	</section>
  )
}

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlassCard