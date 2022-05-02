import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
                                        email: {type: String, required: true, unique: true},
                                        password: {type: String, required: true},
                                        firstName: {type: String, default: "newUserFirstName"},
                                        lastName: {type: String, default: "newUserLastName"},
                                        role: {
                                            type: String,
                                            enum: ['USER', 'REVIEWER', 'ADMIN'],
                                            default: 'USER'
                                        },
                                        following: [{userId : String}],
                                        followers: {type: Number, default: 0},
                                        likedMovies: [{movieId : String}]
                                    }, {collection: 'users'});

export default usersSchema;