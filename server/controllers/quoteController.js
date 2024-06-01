import Quotes from '../models/quoteModel.js'
export const getQuotes = async (req, res) => {
	try {
		const quote = await Quotes.find();
		return res.status(200).json(quote);
	} catch (err) {
		return res.status(500).json({ error: 'Failed to read JSON data' });
	}
};
