import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getAudio = (req, res) => {
	const { note } = req.params
	const audioFilePath = path.join(__dirname, '../../audio/notes', `${note}.mp3`);

	fs.access(audioFilePath, fs.constants.F_OK, (err) => {
		if (err) {
			return res.status(404).json({ error: 'Audio file not found' });
		}
	
		fs.readFile(audioFilePath, (err, data) => {
			if (err) {
				return res.status(500).json({ error: 'Failed to read audio file' });
			}

			res.setHeader('Content-Type', 'audio/mpeg');
			res.send(data);
		});
	});
}
