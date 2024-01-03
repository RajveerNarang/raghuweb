import React from 'react'
import PropTypes from 'prop-types'
import styles from './glass.module.scss'

const GlassCard = ({ children, width, height }) => {
  return (
	<section className={styles.container} style={{width, height}}>
		{children}
	</section>
  )
}

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlassCard