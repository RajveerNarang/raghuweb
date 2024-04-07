import { config } from 'dotenv';

import express, { json } from 'express';
import userRouter from './routes/userRouter.js';
import audioRouter from './routes/audioRouter.js';
import quoteRouter from './routes/quoteRouter.js';
import emailRouter from './routes/emailRouter.js';

config();

const server = express();
server.use(json());

const port = process.env.PORT || 3000;

server.use('/api/login', userRouter)
server.use('/api/audio', audioRouter)
server.use('/api/quote', quoteRouter)
server.use('/api/', emailRouter)

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

