import db from '../fireBaseAdmin.js';

export const getQuotes = (req, res) => {
	try {
		const data = db.collection('quotes').get();
		return res.status(200).json(JSON.parse(data));
	} catch (err) {
		return res.status(500).json({ error: 'Failed to read JSON data' });
	}
};
