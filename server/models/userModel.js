import { Schema, model } from 'mongoose'

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		trim: true,
		maxlength: 25,
		unique: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	role: {
		type: String,
		default: 'user',
		enum: ['user', 'admin']
	}
}, {
	timestamps: true
})

export default model('users', userSchema)
