import { config } from 'dotenv';

import express, { json } from 'express';
import cors from 'cors'
import mongoose from 'mongoose'

import userRouter from './routes/userRouter.js';
import quoteRouter from './routes/quoteRouter.js';
import messageRouter from './routes/messageRouter.js';
import timelineRouter from './routes/timeLineRouter.js';

config();
// initialApp();

const server = express();
server.use(cors())
server.use(json());

try {
	await mongoose.connect(process.env.MONGODB_URL)
} catch (err) {
	console.log('Error:', err)
}

server.use('/api/login', userRouter)
server.use('/api/quote', quoteRouter)
server.use('/api/message', messageRouter)
server.use('/api/journey', timelineRouter)

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running at PORT: ${port}`);
});
