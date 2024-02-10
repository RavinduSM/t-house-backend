import express from 'express';
import { addProduct, deleteProduct, getAllProduct, getProduct, productReview, updateProduct, upload } from '../controllers/product.controller.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import checkId from '../middlewares/checkId.js';
// import { addReview, getAllReviews } from '../controllers/review.controller.js';


const router = express.Router();
// user routers
router.post("/add",
    // authenticate,
    addProduct);
router.get('/', getAllProduct);

// Product routers
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

router.post("/:id/reviews",
    // authenticate, 
    checkId, productReview);

// Review Url and Controller

// router.get('/getAllReviews', getAllReviews)
// router.get('/getProductReviews', getProductReviews)
// router.post('/addReview/:id', addReview)

export default router;