import express from 'express';
import { addProduct, getAllProduct, getProduct } from '../controllers/product.controller.js';


const router = express.Router();

router.post("/add", addProduct);
router.get('/', getAllProduct);
router.get('/:id', getProduct);

export default router;