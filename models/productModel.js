import { mongoose } from "mongoose";

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true, },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    email: { type: String, },
    createdAt: { type: Date, default: Date.now },
},
    { timestamps: true }
);

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true, },
    price: { type: Number, required: true, },
    discount: { type: Number, },
    discountedPrice: { type: Number },
    categories: { type: String, },
    stock: { type: Number, required: true },
    description: { type: String, },
    image: { type: String },
    reviews: [reviewSchema],
    numReviews: { type: Number, required: true, default: 0 },

},
    {
        timeStamps: true
    });



const Product = mongoose.model('Product', productSchema);
export default Product;