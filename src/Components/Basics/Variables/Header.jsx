import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a header component with the specified level, text, and optional class name.
 *
 * @param {number} level - The level of the header.
 * @param {string} text - The text to be displayed in the header.
 * @param {string} className - The optional class name for styling.
 * @return {JSX.Element} The rendered header component.
 */
const Header = ({level, text, className}) => {
	const Tag = `h${level}`
	return (
		<Tag className={className || ''}>{text}</Tag>
	)
}

Header.propTypes = {
	level: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
}

export default Header
