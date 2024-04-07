// import User from '../models/userModel.js';
import validator from 'validator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonFilePath = path.join(__dirname, '../../json/db', 'quoteList.json');

export const postQuotes = (req, res) => {
	const { quote, author } = req.body;

	try {
		let fileData = fs.readFileSync(jsonFilePath, 'utf8');
		let jsonData = JSON.parse(fileData);

		jsonData.push({ quote, author });
		fileData = JSON.stringify(jsonData, null, 2);
		fs.writeFileSync(jsonFilePath, fileData, 'utf8');
		
		res.status(200).json({ message: 'Quote and author stored successfully' });

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

export const getQuotes = (req, res) => {
	try {
		const data = fs.readFileSync(jsonFilePath, 'utf8');
		return res.status(200).json(JSON.parse(data));
	} catch (err) {
		return res.status(500).json({ error: 'Failed to read JSON data' });
	}
};
