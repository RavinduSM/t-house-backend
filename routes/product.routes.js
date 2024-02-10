import express from 'express';
import { addProduct, deleteProduct, getAllProduct, getProduct, updateProduct, upload } from '../controllers/product.controller.js';
import { addReview } from '../controllers/review.controller.js';


const router = express.Router();
// user routers
router.post("/add", addProduct, upload);
router.get('/', getAllProduct);

// Product routers
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

// Review Url and Controller

// router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', addReview)

export default router;