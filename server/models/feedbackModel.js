import { Schema, model } from 'mongoose'

const feedbackSchema = new Schema({
	username: {
		type: String,
		required: true,
		trim: true,
		maxlength: 25
	},
	message: {
		type: String,
		required: true,
		trim: true
	}
}, {
	timestamps: true
})

export default model('feedbacks', feedbackSchema)
