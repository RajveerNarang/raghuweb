import express from 'express';
import { getJourney, postJourney } from "../controllers/timeLineController.js";

const router = express.Router();

router.get('/', getJourney)
router.post('/', postJourney)

export default router
