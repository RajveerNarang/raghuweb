import React from 'react'
import PropTypes from 'prop-types'

import styles from '@components/Basics/Card/QuoteCard/quotecard.module.scss'

/**
 * Renders a Quote Card component with the given quote and author.
 *
 * @param {string} quote - The quote to display.
 * @param {string} author - The author of the quote.
 * @return {JSX.Element} The rendered Quote Card component.
 */
const QuoteCard = ({ quote, author }) => {
	return (
		<div className={`${styles.container}`}>
			<blockquote className={`${styles.content}`}>{quote}</blockquote>
			<span className={`${styles.authorContent}`}>{author}</span>
		</div>
	)
}

QuoteCard.propTypes = {
	quote: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};

export default QuoteCard
