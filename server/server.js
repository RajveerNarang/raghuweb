import { config } from 'dotenv';
import express, { json } from 'express';
import userRouter from './routes/userRouter.js';

config();

const app = express();
app.use(json());

const port = process.env.PORT || 3000;

app.use('/api/login', userRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

