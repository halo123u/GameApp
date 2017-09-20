const express = require('express');
const axios = require('axios');
const authenticate = require('../../services/auth/authenticate');
const gameApi = express.Router();
gameApi.get('/popular', (req,res)=>{
    console.log('this works');
})

module.exports = gameApi;