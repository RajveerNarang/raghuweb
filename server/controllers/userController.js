import validator from 'validator';
import db from '../fireBaseAdmin.js';

export const postUser = async (req, res) => {
	const { email, username, role } = req.body;

	if (!username && !email)
		return res.status(400).json({ error: 'Both username and email are required' });

	if (!validator.isEmail(email)) 
		return res.status(400).json({ error: 'Invalid email format' });

	try {
		const userExists = await checkUserExistsByEmail(email);

		if (!userExists) {
			await registerUser(username, email, role)
			const loggedUser = await getRole(username, email);

			res.status(200).json({ message: 'User registered successfully', isLoggedIn: true, role: loggedUser });

		} else {
			const verifyCredits = await db.collection('users').where("username", "==", username).where("email", "==", email).get()
			if (!verifyCredits.empty) {
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

const checkUserExistsByEmail = async (email) => {
	const querySpanshot = await db.collection('users').where('email', '==', email).get()
	return !querySpanshot.empty
}

const registerUser = async (username, email, role) => {
	const userRole = role || 'user'
	await db.collection('users').add({username, email, role: userRole})
}

const getRole = async (username, email) => {
	const querySnapshot = await db.collection('users').where("username", "==", username).where("email", "==", email).get()
	return querySnapshot.docs[0].data().role;
}
