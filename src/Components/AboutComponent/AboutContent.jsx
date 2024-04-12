import React from 'react'
import PropTypes from 'prop-types'
import styles from '@components/AboutComponent/about.module.scss'

const AboutContent = (props) => {
	const { children, className } = props;
  return (
	<section className={`${styles.content_box} ${className || ''}`}>
		{children}
	</section>
  )
}

AboutContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutContent
