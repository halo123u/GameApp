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
    }, 
    createUser : (req,res) => {
        let body = _.pick(req.body,['email','password']);
        const new_User = new User(body);
        new_User.save().then(()=> {
            return new_User.generateAuthToken();
        }).then(token=>{
            res.header('x-auth',token ).send({user:new_User,
                auth : true});

        }).catch(err=>{
            console.log(err);
            res.status(400).send(err);
        });
    },
    signIn : (req,res) => {
        let body = _.pick(req.body,['email', 'password']);
        User.findByCredentials(body.email,body.password).then((user)=>{
            user.generateAuthToken().then(token => {
                res.header('x-auth',token ).send({user,
                auth: true});
            })
        }).catch(e=>{
            res.status(400).send();
        })
    },

}

module.exports = userController;