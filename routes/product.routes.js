import express from 'express';
import { addProduct, deleteProduct, getAllProduct, getProduct, productReview, updateProduct, upload } from '../controllers/product.controller.js';
import checkId from '../middlewares/checkId.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();
// user routers
router.post("/add",
    //  verifyToken,
    addProduct);
router.get('/', getAllProduct);

// Product routers
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

router.post("/:id/reviews",
    verifyToken,
    checkId, productReview);

// Review Url and Controller

// router.get('/getAllReviews', getAllReviews)
// router.get('/getProductReviews', getProductReviews)
// router.post('/addReview/:id', addReview)

export default router;