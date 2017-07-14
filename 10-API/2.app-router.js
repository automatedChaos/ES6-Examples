/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-12T21:21:51+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: app.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-14T10:05:11+01:00
*/

const express = require('express');

//create am instance of express
let app = express();

// set up a port that defaults to 3000 unless there is a env variable
// (this will change in gulp)
let port = process.env.PORT || 3000;

// create a router to handle all end points for the API
let resourceRouter = express.Router();                                          //*

// here is where you add all the endpoints for the resources API
resourceRouter.route('/Resources')                                              //*
  .get((req, res) => {

    let response = {msg: 'this is the GET API endpoint!'};
    res.json(response);         // send json specifically

  });

// set a default static folder
app.use('/api', resourceRouter);                                                //*

// setup a route
app.get('/', (req, res) => {                   // arrow functions
  res.send('Welcome to Express');
});

// begin listening on the port
app.listen(port, () => {
  console.log(`Now running on port: ${port}`);     // cheeky string literal
});
