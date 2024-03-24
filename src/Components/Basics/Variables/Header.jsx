import React from 'react'
import PropTypes from 'prop-types'

const Header = ({level, text, additionalClass}) => {
	const Tag = `h${level}`
  return (
	<Tag className={additionalClass || ''}>{text}</Tag>
  )
}

Header.propTypes = {
	level: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
}

export default Header
