import Review from "../models/reviewModel.js";

export const addReview = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { id } = req.params;
        const review = new Review({
            product_id: id,
            rating: req.body.rating,
            comment: req.body.comment,
            name: req.body.name,
        })
        const createReview = await review.save()
        res.send({ message: "review added", review: createReview });
    } catch (error) {
        next(error);
    }
};