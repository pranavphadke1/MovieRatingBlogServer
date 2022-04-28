import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
                                        avatarIcon: String,
                                        userName: String,
                                        handle: String,
                                    }, {collection: 'users'});
export default usersSchema;