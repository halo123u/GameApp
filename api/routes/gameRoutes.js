const express = require('express');
const axios = require('axios');
const authenticate = require('../../services/auth/authenticate');
const gameApi = express.Router();
gameApi.get('/popular', authenticate , (req,res)=>{
    // https://api-2445582011268.apicast.io/games/?fields=name,url,summary,popularity,cover&order=popularity:desc
    let header = { 'user-key' : process.env.USER_KEY} 
    axios.get(' https://api-2445582011268.apicast.io/games/?fields=name,url,summary,popularity,cover,screenshots&order=popularity:desc',{headers : header}).then(data=>{
        console.log(data);
        res.send(data.data)
    }).catch(err=>console.log(err));
})

module.exports = gameApi;