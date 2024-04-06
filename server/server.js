import { config } from 'dotenv';

import express, { json } from 'express';
import userRouter from './routes/userRouter.js';
import audioRouter from './routes/audioRouter.js';

config();

const server = express();
server.use(json());

const port = process.env.PORT || 3000;

server.use('/api/login', userRouter)
server.use('/api/audio', audioRouter)

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

