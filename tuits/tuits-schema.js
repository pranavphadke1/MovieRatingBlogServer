import mongoose from 'mongoose';

const tuitsSchema = mongoose.Schema({
                                   topic: String,
                                   postedBy: {
                                       username: String
                                   },
                                   liked: Boolean,
                                   verified: Boolean,
                                   handle: String,
                                   time: String,
                                   title: String,
                                   tuit: String,
                                   attachments: {
                                       video: String,
                                       image: String
                                   },
                                   ["logo-image"]: String,
                                   stats: {
                                       comments: Number,
                                       retuits: Number,
                                       likes: Number,
                                       dislikes: Number
                                   }
                               }, {collection: 'tuits'});
export default tuitsSchema;