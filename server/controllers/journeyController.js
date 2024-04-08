// import User from '../models/userModel.js';
import validator from 'validator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonFilePath = path.join(__dirname, '../../json/db', 'journey.json');

export const postJourney = (req, res) => {
	const { name, level, month, year } = req.body;
	// console.log(req.body)

	try {
		let fileData = fs.readFileSync(jsonFilePath, 'utf8');
		let jsonData = JSON.parse(fileData);

		const userExists = jsonData.some(user => user.name === name);

		if (!userExists) {
			jsonData.push({ name, level, month, year });
			fileData = JSON.stringify(jsonData, null, 2);
			fs.writeFileSync(jsonFilePath, fileData, 'utf8');
			// console.log(`Data has been added to file: ${jsonFilePath}`);
			res.status(200).json({ message: 'User registered successfully' });
		} else {
			res.status(200).json({ message: 'User logged in successfully' });
		}
	} catch (err) {
		if (err.code === 'ENOENT') {
			// file does not exist, create a new file with data
			const newFileData = `[${JSON.stringify(req.body, null, 2)}]`;
			fs.writeFileSync(jsonFilePath, newFileData, 'utf8');
			res.status(200).json({ message: 'File is created' });
		} else {
			return res.status(500).json({ error: `Error reading/writing file: ${jsonFilePath}: ${err.message}`});
		}
	}
};

export const getJourney = (req, res) => {
	try {
		const data = fs.readFileSync(jsonFilePath, 'utf8');
		return res.status(200).json(JSON.parse(data));
	} catch (err) {
		return res.status(500).json({ error: 'Failed to read JSON data' });
	}
};
