import Product from "../models/productModel.js";

export const addProduct = async (req, res, next) => {
    try {
        const product = new Product({
            productName: req.body.productName,
            price: req.body.price,
            discount: req.body.discount,
            discountedPrice: req.body.discountedPrice,
            categories: req.body.categories,
            stock: req.body.stock,
            description: req.body.description,
            image: req.body.image,
        })
        const createProduct = await product.save()
        res.send({ message: "Product added", product: createProduct });
    } catch (error) {
        next(error);
    }
};

export const getllProduct = async (req, res, next) => {
    try {
        const product = await Product.find();
        res.status(200).json({ product, nbHits: product.length })
    } catch (error) {
        next(error);
    }
};

