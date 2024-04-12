import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({content, className}) => {
  return (
	<p className={className || ''}>{content}</p>
  )
}

Paragraph.propTypes = {
  content: PropTypes.string.isRequired
}

export default Paragraph
