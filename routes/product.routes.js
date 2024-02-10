import express from 'express';
import { addProduct, getllProduct } from '../controllers/product.controller.js';


const router = express.Router();

router.post("/add", addProduct);
router.get('/', getllProduct);

export default router;