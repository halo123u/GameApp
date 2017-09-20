const userController = require('../controllers/userController');
const express = require('express');
const users = express.Router();

users.get('/', userController.getUsers);

module.exports = users;