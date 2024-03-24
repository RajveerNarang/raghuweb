import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({content, additionalClass}) => {
  return (
	<p className={additionalClass || ''}>{content}</p>
  )
}

Paragraph.propTypes = {
  content: PropTypes.string.isRequired
}

export default Paragraph
