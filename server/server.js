import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import userRouter from '@server/routes/userRouter.js';

console.log(userRouter);

const app = express();
const port = process.env.PORT || 3000;


app.use('/', userRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

