import validator from 'validator';
import User from '../models/userModel.js'

export const postUser = async (req, res) => {
	const { email, username, role } = req.body;

	if (!username && !email)
		return res.status(400).json({ error: 'Both username and email are required' });

	if (!validator.isEmail(email)) 
		return res.status(400).json({ error: 'Invalid email format' });

	try {
		const userExists = await User.find({email: email})
		if (userExists.length === 0) {
			await registerUser(username, email, role)
			const loggedUser = await getRole(username, email);

			res.status(200).json({ message: 'User registered successfully', isLoggedIn: true, role: loggedUser });

		} else {
			const verifyCredits = await User.findOne({username: username, email: email})
			if (verifyCredits) {
				const loggedUser = await getRole(username, email);
				res.status(200).json({ message: 'User logged in successfully', isLoggedIn: true, role: loggedUser });
			} else {
				res.status(400).json({ error: 'Credentials not matched, please enter the correct credentials' });
			}
		}
	} catch (err) {
		return res.status(500).json({ error: err.message});
	}
};

const registerUser = async (username, email, role) => {
	const userRole = role || 'user'
	const newUser = new User({username, email, role: userRole})
	await newUser.save()
}

const getRole = async (username, email) => {
	const querySnapshot = await User.findOne({username: username, email: email})
	return querySnapshot.role;
}
