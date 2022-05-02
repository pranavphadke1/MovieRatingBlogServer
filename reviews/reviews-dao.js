import reviewsModel from './reviews-model.js';

const findAllReviews = () => reviewsModel.find();
const createReview = (review) => reviewsModel.create(review);
const deleteReview = (rid) => reviewsModel.deleteOne({_id: rid});
const updateReview = (rid, review) => reviewsModel.updateOne({_id: rid}, {$set: review})

export default {findAllReviews, createReview, deleteReview, updateReview};