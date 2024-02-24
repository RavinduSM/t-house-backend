import express from 'express';
import { addProduct, addToWishlist, deleteProduct, filterProducts, getAllProduct, getAllReviews, getProduct, getProductReviews, productReview, updateProduct, upload } from '../controllers/product.controller.js';
import checkId from '../middlewares/checkId.js';
import { verifyToken } from '../utils/verifyUser.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();
// user routers
router.post("/add",
    verifyToken,
    addProduct);
router.get('/', getAllProduct);
router.get('/reviews', getAllReviews);

// Product routers
router.get('/:id', getProduct);
router.post('/:id/reviews', productReview);
router.get('/:id/reviews', getProductReviews);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post("/filteredProducts", filterProducts)
router.put('/wishlist', addToWishlist)

router.post("/:id/reviews",
    verifyToken,
    checkId, productReview);

// Review Url and Controller

// router.get('/getAllReviews', getAllReviews)
// router.get('/getProductReviews', getProductReviews)
// router.post('/addReview/:id', addReview)

export default router;