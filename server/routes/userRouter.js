import express from 'express';
import { postUser } from "../controllers/userController.js";

const router = express.Router();

router.post('/', postUser)

export default router
