import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import styles from '@components/AboutComponent/about.module.scss'
import PropTypes from 'prop-types';

const AboutIconGrp = (props) => {
	const {idx, icon, text, setCurrentIndex, isCurrent} = props
  return (
	<>
		<motion.button
			onClick={() => setCurrentIndex(idx)}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			className={`${styles.iconBtn} ${isCurrent ? `${styles.active}` : ''}`}
		>
			<FontAwesomeIcon icon={icon} />
			<span>{text}</span>
		</motion.button>

	</>
  )
}

AboutIconGrp.propTypes = {
	idx: PropTypes.number.isRequired,
	icon: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
	setCurrentIndex: PropTypes.func.isRequired,
	isCurrent: PropTypes.bool.isRequired
}

export default AboutIconGrp
