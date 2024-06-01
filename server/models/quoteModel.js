import { Schema, model } from 'mongoose'

const quoteSchema = new Schema({
	author: {
		type: String,
		required: true,
		trim: true,
		maxlength: 25
	},
	quote: {
		type: String,
		required: true,
		trim: true
	}
}, {
	timestamps: true
})

export default model('quotes', quoteSchema)
