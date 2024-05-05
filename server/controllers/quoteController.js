import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonFilePath = path.join(__dirname, '../../json/db', 'quoteList.json');

export const getQuotes = (req, res) => {
	try {
		const data = fs.readFileSync(jsonFilePath, 'utf8');
		return res.status(200).json(JSON.parse(data));
	} catch (err) {
		return res.status(500).json({ error: 'Failed to read JSON data' });
	}
};
