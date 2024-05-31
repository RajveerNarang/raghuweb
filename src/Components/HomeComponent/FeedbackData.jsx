import axios from 'axios'
import React, { useEffect, useState } from 'react'
import QuoteCard from '@components/Basics/Card/QuoteCard/QuoteCard'

const FeedbackData = () => {
	const [feedback, setFeedback] = useState([])

	useEffect(() => {
		const feedbackData = async() => {
			try {
				const resp = await axios.get('/api/message')
				setFeedback(resp.data)
			} catch (error) {
				console.error(error.message)
			}
		}
		feedbackData()
	}, [])
	return ( 
		<div className='grid'>
			{feedback ? feedback.map((data, index) => (
				<QuoteCard key={index} author={data.username} quote={data.message} />
				)
			):null}
		</div>
	)
}

export default FeedbackData
