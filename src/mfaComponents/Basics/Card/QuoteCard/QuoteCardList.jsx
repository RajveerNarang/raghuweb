import React from 'react'
import PropTypes from 'prop-types'

import QuoteCard from './QuoteCard'

const QuoteCardList = ({quotesData}) => {
  return (
	<>
		{quotesData.map((quoteData, index) => {
			<QuoteCard quote={quoteData.quote} author={quoteData.author} key={index} />
		})}
	</>
  )
}

QuoteCardList.propTypes = {
	quotesData: PropTypes.array.isRequired,
};


export default QuoteCardList