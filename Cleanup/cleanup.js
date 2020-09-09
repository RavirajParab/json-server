const Express = require('express');
const CleanupApp = Express.Router();
const fetch = require('node-fetch');

// define the route for the finance Mini App
CleanupApp.get('/',async (req,res)=>{
  //console.log(req.url);
  //const userResponse = await fetch('/users');
  //const users = await userResponse.json();
  res.json(req.url);
});
module.exports = CleanupApp;

