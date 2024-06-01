import Timeline from '../models/timelineModel.js';

export const postJourney = async (req, res) => {
	const { title, description, date } = req.body;
	
	try {
		const titleExists = await Timeline.findOne({title: title})
		
		if (!titleExists) {
			const newTimeline = new Timeline({ title, description, date })
			await newTimeline.save()

			res.status(200).json({ message: 'Data added successfully' });
		} else {
			res.status(200).json({ message: 'Data Exists' });
		}
	} catch (err) {
		return res.status(500).json({ error: err.message});
	}
};

export const getJourney = async (req, res) => {
	try {
		const journey = await Timeline.find();
		return res.status(200).json(journey);
	} catch (err) {
		return res.status(500).json({ error: 'Failed to read JSON data' });
	}
};
