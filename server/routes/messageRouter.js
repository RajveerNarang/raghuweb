import express from 'express';
import { getMessages, postMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post('/', postMessage)
router.get('/', getMessages)

export default router
