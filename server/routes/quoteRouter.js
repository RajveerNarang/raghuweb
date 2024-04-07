import express from 'express';
import { getQuotes, postQuotes } from "../controllers/quoteController.js";

const router = express.Router();

router.get('/', getQuotes)
router.post('/', postQuotes)

export default router
