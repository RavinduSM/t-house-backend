import express from 'express';
import { addProduct, getAllProduct, getProduct, updateProduct } from '../controllers/product.controller.js';


const router = express.Router();

router.post("/add", addProduct);
router.get('/', getAllProduct);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);

export default router;