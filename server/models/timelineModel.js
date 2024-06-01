import { Schema, model } from 'mongoose'

const timelineSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		maxlength: 25,
		unique: true
	},
	description: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	date: {
		type: String,
		required: true,
		trim: true,
	}
}, {
	timestamps: true
})

export default model('timelines', timelineSchema)
