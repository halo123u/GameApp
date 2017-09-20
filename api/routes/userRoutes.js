const userController = require('../controllers/userController');
const express = require('express');
const users = express.Router();

users.get('/', userController.getUsers);
users.post('/', userController.createUser);

module.exports = users;