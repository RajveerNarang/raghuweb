import React from 'react'
import { faGear, faHome, faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from '@components/Basics/element.module.scss'
import Button from '@components/Basics/Button/Button'
import Input from '@components/Basics/Input/Input'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import QuoteCard from '@components/Basics/Card/QuoteCard/QuoteCard'

const Elements = () => {

	// const extraStyle = {
	// 	width: '50%',
	// };
	const quotesData = [
		{
			quote: "The only limit to our realization of tomorrow will be our doubts of today.",
			author: "- Franklin D. Roosevelt"
		},
		{
			quote: "In three words I can sum up everything I've learned about life: it goes on.",
			author: "- Robert Frost"
		},
	];
  return (
	<div className={`${styles.container}`}>
		<div className={`${styles.flex__right}`}>
			<Button iconClass={faPlus} name={'plus'} onClick={console.log('Plus')} />
			<Button iconClass={faHome} name={'Home'} onClick={console.log('Home')} />
			<Button iconClass={faGear} name={'Gear'} onClick={console.log('Gear')} />
		</div>
		<div className={`${styles.flex__right}`}>
			<Input inputType={'text'} labelText={'Name'} inputNameId={'name'} />
			{/* <Input inputType={'email'} labelText={'Email'} inputNameId={'email'} /> */}
		</div>
		<div className={`${styles.flex__right}`}>
			{/* <GlassCard width={'100vw'}>
				<Input inputType={'text'} labelText={'Name'} inputNameId={'name'} additionalStyle={extraStyle}/>
			</GlassCard> */}
			
		{quotesData.map((quoteData, index) => (
			<GlassCard key={index}>
				<QuoteCard quote={quoteData.quote} author={quoteData.author} />
			</GlassCard>
		))}
		</div>
	</div>
  )
}

export default Elements