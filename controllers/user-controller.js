import usersDao from "../users/users-dao.js";

const findAllUsers = async (req, res) => {
    const users = await usersDao.findAllUsers()
    res.json(users);
}

const createUser = async (req, res) => {
    const newUser = req.body;
    const insertedUser = await usersDao.createUser(newUser);
    res.json(insertedUser);
}

const deleteUser = async (req, res) => {
    const userIdToDelete = req.params.uid;
    const status = await usersDao.deleteUser(userIdToDelete);
    res.send(status);
}

const updateUser = async (req, res) => {
    const userIdToUpdate = req.params.uid;
    const updatedUser = req.body;
    const status = await usersDao.updateUser(userIdToUpdate, updatedUser);
    res.send(status);
}


const usersController = (app) => {
    app.post('/api/users', createUser);
    app.get('/api/users', findAllUsers);
    app.put('/api/users/:uid', updateUser);
    app.delete('/api/users/:uid', deleteUser);
}

export default usersController;