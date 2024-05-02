// import User from '../models/userModel.js';
import validator from 'validator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const userFilePath = path.join(__dirname, '../../json/db', 'userList.json');

export const postUser = async (req, res) => {
	const { email, username, role } = req.body;
	// console.log(req.body)
	if (!username && !email)
		return res.status(400).json({ error: 'Both username and email are required' });

	if (!validator.isEmail(email)) 
		return res.status(400).json({ error: 'Invalid email format' });

	try {
		let fileData = fs.readFileSync(userFilePath, 'utf8');
		let userData = JSON.parse(fileData);

		const userExists = await userData.some(user => user.username === username || user.email === email);;

		if (!userExists) {
			userData.push({ 
				username,
				email, 
				role: role || "user" 
			});

			fileData = JSON.stringify(userData, null, 2);
			fs.writeFileSync(userFilePath, fileData, 'utf8');
			// console.log(`Data has been added to file: ${userFilePath}`);
			const loggedUser = await userData.filter(user => user.username === username && user.email === email);
			res.status(200).json({ message: 'User registered successfully', isLoggedIn: true, role: loggedUser[0].role });
		} else {
			const verifyCredits = await userData.some(user => user.username === username && user.email === email);
			if (verifyCredits) {
				const loggedUser = await userData.filter(user => user.username === username && user.email === email);
				res.status(200).json({ message: 'User logged in successfully', isLoggedIn: true, role: loggedUser[0].role });
			} else {
				res.status(400).json({ error: 'Credentials not matched, please enter the correct credentials' });
			}
		}
	} catch (err) {
		if (err.code === 'ENOENT') {
			// file does not exist, create a new file with data
			const newFileData = `[${JSON.stringify(req.body, null, 2)}]`;
			fs.writeFileSync(userFilePath, newFileData, 'utf8');
			res.status(200).json({ message: 'File is created' });
		} else {
			return res.status(500).json({ error: `Error reading/writing file: ${userFilePath}: ${err.message}`});
		}
	}
};
