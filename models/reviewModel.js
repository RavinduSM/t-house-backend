import { mongoose } from "mongoose";

const reviewSchema = mongoose.Schema({
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    name: {
        type: String,
        required: true,
        //   ref: "User",
    },
},
    { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);
export default Review;