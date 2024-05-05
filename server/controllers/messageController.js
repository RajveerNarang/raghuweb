import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonFilePath = path.join(__dirname, '../../json/db', 'feedbackList.json');
let messageIndex = 1;

export const postMessage = async (req, res) => {
	const { username, message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  try {
	let fileData = fs.readFileSync(jsonFilePath, 'utf8');
	let messageData = JSON.parse(fileData);

	let finalUsername = username || `Anonymous-${messageIndex}`;
	messageIndex++;

	messageData.push({ 
		finalUsername,
		message, 
	});

	fileData = JSON.stringify(userData, null, 2);
	fs.writeFileSync(jsonFilePath, fileData, 'utf8');
	
	res.status(200).json({ message: 'Message sent successfully'});
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
}
