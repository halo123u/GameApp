const express = require('express');

const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
require("dotenv").config();
// const Promise = require('bluebird');
// Promise.promisifyAll(mongoose);
mongoose.connect('mongodb://localhost/GamingDb');

app.use(bodyParse.urlencoded({ extended : true}));
app.use(bodyParse.json());

app.listen(port);

const userRoutes = require('./api/routes/userRoutes');
app.use('/users', userRoutes);


console.log('todo list RESTful API server started on: l' + port);