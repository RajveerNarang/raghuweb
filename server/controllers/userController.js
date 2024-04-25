// import User from '../models/userModel.js';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const userFilePath = path.join(__dirname, '../../json/db', 'userList.json');

export const postUser = async (req, res) => {
	const { email, username, isAdmin } = req.body;
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
				admin: Boolean(isAdmin) 
			});

			fileData = JSON.stringify(userData, null, 2);
			fs.writeFileSync(userFilePath, fileData, 'utf8');
			// console.log(`Data has been added to file: ${userFilePath}`);
			res.status(200).json({ message: 'User registered successfully', isLoggedIn: true });
		} else {
			const token = generateToken(userData);
			res.status(200).json({ message: 'User logged in successfully', isLoggedIn: true, token });
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

export const getUser = (req, res) => {
	try {
		const data = fs.readFileSync(userFilePath, 'utf8');
		return res.status(200).json(JSON.parse(data));
	} catch (err) {
		return res.status(500).json({ error: 'Failed to read JSON data' });
	}
};

// Function to simulate generating a JWT token
const generateToken = (user) => {
	const payload = {
		username: user.username,
		email: user.email,
	};
	const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1d' }); // Token expires in 1 day

	return token;
};
