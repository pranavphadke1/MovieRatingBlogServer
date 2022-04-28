import usersModel from "./users-model.js";

const findAllUsers = () => usersModel.find();
const createUser = (user) => usersModel.create(user);
const deleteUser = (uid) => usersModel.deleteOne({_id: uid});
const updateUser = (uid, user) => usersModel.updateOne({_id: uid}, {$set: user})

export default {findAllUsers, createUser, deleteUser, updateUser};