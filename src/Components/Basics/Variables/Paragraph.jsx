import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({content, className, bold}) => {
  return (
	<p className={className || ''}>
		{bold ? <strong style={{fontSize: '1.25rem'}}>{bold}</strong> : null}{content}</p>
  )
}

Paragraph.propTypes = {
  content: PropTypes.string.isRequired
}

export default Paragraph
