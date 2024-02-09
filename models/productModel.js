const productSchema = new mongoose.Schema({
    productName: { type: String, required: true, },
    price: { type: Number, required: true, },
    discount: { type: Number, },
    discountedPrice: { type: Number },
    categories: { type: String, },
    stock: { type: Number, required: true },
    description: { type: String, },
    image: { type: String },

},
    {
        timeStamps: true
    });

const Product = mongoose.model('Product', productSchema);
export default Product;