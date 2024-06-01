import Feedback from '../models/feedbackModel.js'

let messageIndex = 1;

export const postMessage = async (req, res) => {
	const { username, message } = req.body;

	if (!message) {
		return res.status(400).json({ error: 'Message is required' });
	}
	try {
		let finalUsername = username || `Anonymous-${messageIndex}`;
		username || messageIndex++;

		const newFeedback = new Feedback({
			username: finalUsername,
			message
		});
		await newFeedback.save()

		res.status(200).json({ message: 'Message sent successfully'});
	} catch (err) {
		return res.status(500).json({error: err.message});
	}
}

export const getMessages = async (req, res) => {
	try {
		const feedback = await Feedback.find();
		return res.status(200).json(feedback);
	} catch (err) {
		return res.status(500).json({ error: 'Failed to read JSON data' });
	}
}
