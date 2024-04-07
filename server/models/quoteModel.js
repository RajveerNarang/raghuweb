import { Schema, model } from 'mongoose'

const quoteSchema = new Schema({
	quote: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	author: {
		type: String,
		required: true,
		trim: true,
		unique: true
	}
}, {
	timestamps: true
})


export default model('quotes', quoteSchema)
