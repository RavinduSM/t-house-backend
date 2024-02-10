import Product from "../models/productModel.js";
import errorHandler from "../utils/error.js";

// image Upload
import multer from "multer";
import path from 'path';

export const addProduct = async (req, res, next) => {
    // console.log(req.body)
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

export const getAllProduct = async (req, res, next) => {
    try {
        const product = await Product.find(req.query); //req.quey to get filter options
        res.status(200).json({ product, nbHits: product.length })
    } catch (error) {
        next(error);
    }
};

export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.send(product);
        } else {
            res.status(404)
                .message({ message: "Product not found" });
        }
    } catch (error) {
        next(error);
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        if (
            !req.body.price ||
            !req.body.discount ||
            !req.body.discountedPrice ||
            !req.body.categories ||
            !req.body.stock ||
            !req.body.description ||
            !req.body.image
        ) {
            return next(errorHandler(400, 'Send all the required fields!'));
        }
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!product) {
            return next(errorHandler(404, 'Product not found!'));
        }
        return res.status(200).send({ message: "Product updated successfully" })
    } catch (error) {
        next(error);
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            res.status(200).send({ message: "Product deleted successfully" })
        } else {
            return next(errorHandler(404, 'Product not found!'));
        }
    } catch (error) {
        return next(error);
    }
}

//Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')
