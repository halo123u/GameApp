const mongoose = require('mongoose');
const _ = require('lodash');
const User = mongoose.model('User');

const userController = {
    getUsers : (req,res) =>{
        User.find({}).then( user => {
            res.json(user);
        }).catch(err => {
            console.log(err);
            res.send(err);
        })
    }

}

module.exports = userController;