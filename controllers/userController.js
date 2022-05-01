const db = require("../models");

const User = db.User;

// 1. create new user
const addUser = async (req, res) => {
    let data = {
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        age: req.body.age,
    };

    try {
        await User.create(data);
        res.status(201).send({
            message: "A new user has been created",
            newUser: data
        });
    } catch (error) {
        alert(error);
    }
};

// 2. get all user
const getAllUser = async (req, res) => {
    try {
        const users = await User.findAll({});
        res.status(200).send(users);
    } catch (error) {
        alert(error);
    }
};

// 3. get user by id
const getUserById = async (req, res) => {
    const id = +req.params.id;
    try {
        const user = await User.findOne({ where: { id: id } });
        res.status(200).send(user);
    } catch (error) {
        console.log(`error: ${error.message}`);
    }
};

// 4. edit user
const editUser = async (req, res) => {
    const id = +req.params.id;
    try {
        const edit = await User.update(req.body, { where: { id: id } });
        const editedUser = await User.findOne({ where: { id: id } });
        res.status(200).send(editedUser);
    } catch (error) {
        console.log(`error: ${error.message}`);
    }
};

// delete user
const deleteUser = async (req, res) => {
    const id = +req.params.id;
    try {
        const deletedUser = await User.destroy({ where: { id: id } });
        const remainingUsers = await User.findAll();
        res.status(200).send({ message: `A user with id : ${id} has been deleted`, users: remainingUsers });
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

module.exports = {
    addUser,
    getAllUser,
    getUserById,
    editUser,
    deleteUser,
};
