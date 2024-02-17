import React from 'react'
import PropTypes from 'prop-types'
import styles from '@components/Basics/GlassBox/glass.module.scss'

const GlassCard = (props) => {
	const { id, children, additionalClass } = props;
  return (
	<section id={id} className={`${styles.container} ${additionalClass}`}>
		{children}
	</section>
  )
}

GlassCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GlassCard