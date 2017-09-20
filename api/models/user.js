const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;


const UserSchema =  new Schema({
    
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1,
        unique : true,
        validate: {
            validator: validator.isEmail,
        }

    },
    gamertag:{
        type :String,
        required: true,
    },
    password: {
        type: String,
        require: true,
        minlength : 6
    },
    tokens: [{
        access: {
            type: String,
            required : true
        },
        token: {
            type: String,
            required : true
        }
    }]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;