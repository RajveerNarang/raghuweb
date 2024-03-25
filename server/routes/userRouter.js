import express from 'express';
import { emailLogin } from "@server/controllers/userController.js";

const router = express.Router();

router.post('/login', emailLogin)

export default router
