import express from 'express';
import { getEmail, postEmail } from "../controllers/userController.js";

const router = express.Router();

router.get('/', getEmail)
router.post('/', postEmail)

export default router
