import express from 'express';
import { getAudio } from "../controllers/audioController.js";

const router = express.Router();

router.get('/:note', getAudio)

export default router
