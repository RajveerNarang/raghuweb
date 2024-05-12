import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a paragraph component with optional bold text and custom class.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.content - The content of the paragraph.
 * @param {string} [props.className] - The additional CSS class for the paragraph.
 * @param {string} [props.bold] - The bold text to be displayed in the paragraph.
 * @return {JSX.Element} The rendered paragraph component.
 */
const Paragraph = ({content, className, bold}) => {
	return (
		<p className={className || ''}>
			{bold ? <strong style={{fontSize: '1.25rem'}}>{bold}</strong> : null}{content}
		</p>
	)
}

Paragraph.propTypes = {
  content: PropTypes.string.isRequired
}

export default Paragraph
