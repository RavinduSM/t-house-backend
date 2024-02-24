import express from 'express';
import { addMessage } from '../controllers/message.Controller.js';

const router = express.Router();

router.post('/', addMessage);

export default router;