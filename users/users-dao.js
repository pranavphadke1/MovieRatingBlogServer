import usersModel from './users-model.js';

const findAllUsers = () => {
    return usersModel.find()
}
const findUserById = (id) => {
    return usersModel.findById(id)
    // return userModel.find({_id: id})
}
const findUserByEmail = (email) =>
    usersModel.findOne({email})
// userModel.findOne({email: email})
// userModel.find({email: email})

const findUserByCredentials = (email, password) =>
    usersModel.findOne({email, password})
// userModel.findOne({email: email, password: password})
const createUser = (user) =>
    usersModel.create(user)
const updateUser = (id, user) =>
    usersModel.updateOne(
        {_id: id},
        {$set: user}
        // {
        //   $set: {
        //     email: user.email,
        //     password: user.password,
        //     firstName: user.firstName,
        //     lastName: user.lastName
        //   }
        // }
    )
const deleteUser = (id) =>
    usersModel.deleteOne({_id: id})

export default {
    findUserByEmail, findAllUsers, findUserByCredentials,
    findUserById, createUser, deleteUser, updateUser
}