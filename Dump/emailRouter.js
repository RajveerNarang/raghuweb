import express from 'express'
import { sendEmail } from "./emailController.js";

const router = express.Router();
router.post('/', sendEmail)

export default router
