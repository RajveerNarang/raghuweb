import express from 'express';
import { getJourney, postJourney } from "../controllers/journeyController.js";

const router = express.Router();

router.get('/', getJourney)
router.post('/', postJourney)

export default router
