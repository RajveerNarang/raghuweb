import db from '../fireBaseAdmin.js';

let messageIndex = 1;

export const postMessage = async (req, res) => {
	const { username, message } = req.body;

	if (!message) {
		return res.status(400).json({ error: 'Message is required' });
	}
	try {
		let finalUsername = username || `Anonymous-${messageIndex}`;
		username || messageIndex++;

		await db.collection('feedback').add({ 
			username: finalUsername,
			message, 
		});
		
		res.status(200).json({ message: 'Message sent successfully'});
	} catch (err) {
		return res.status(500).json({error: err.message});
	}
}

export const getMessages = async (req, res) => {
	try {
		const snapshot = await db.collection('feedback').get();
		const feedback = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
		return res.status(200).json(feedback);
	} catch (err) {
		return res.status(500).json({ error: 'Failed to read JSON data' });
	}
}
