import User from '@server/models/User.js';
import { isEmail } from 'validator';

export const emailLogin = async (req, res) => {
	try {
		// Validate the email format
		if (!isEmail(req.body.email)) {
			return res.status(400).json({ message: 'Invalid email format' });
		}
	
		// Check if the email exists
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			// If the email does not exist, register a new user
			const newUser = new User({ email: req.body.email });
			await newUser.save();
			res.status(200).json({ message: 'User registered successfully' });
		} else {
			// If the email exists, log in the user
			res.status(200).json({ message: 'User logged in successfully' });
		}
	} catch (err) {
	  res.status(500).json({ message: 'Failed to send email', error: err.message });
	}
}
