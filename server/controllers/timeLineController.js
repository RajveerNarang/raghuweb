import db from '../fireBaseAdmin.js';

export const postJourney = async (req, res) => {
	const { title, description, date } = req.body;
	
	try {
		const titleExists = await db.collection('journey').where("title", "==", title).get();
		
		if (titleExists.empty) {
			await db.collection('journey').add({ title, description, date });
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
		const snapshot = await db.collection('journey').get();
		const journey = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
		return res.status(200).json(journey);
	} catch (err) {
		return res.status(500).json({ error: 'Failed to read JSON data' });
	}
};
