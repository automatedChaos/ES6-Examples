/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-12T21:21:51+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: app.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-14T10:44:50+01:00
*
* mongodb://127.0.0.1:27017/
*
* Make sure that you have mongoDB installed and running.
* I used Brew to install mongoDB and so the command to get it up and running is:
* brew services start mongodb
* or
* brew services stop mongodb
*
*
* import the data into mongoDB:
* mongo resourceAPI < ResourceTestData.js
*
*/

const express = require('express');

const Resource = require('./models/ResourceModel');

//create am instance of express
let app = express();

// Mongoose provides a straight-forward, schema-based solution to
// model your application data. It includes built-in type casting,
// validation, query building, business logic hooks and more, out of the box.
// **** IMPORTANT: At the time of writing, use version 4.10.8 -
// npm install mongoose@4.10.8 --save
let mongoose = require('mongoose');

// connect to MongoDB using Mongoose
let db = mongoose.connection;

// output some useful info just in case
db.on('error', (err)=>{ console.log(err)});
db.once('open', function() { console.log('MongoDB: Connected!'); });
db = mongoose.connect('mongodb://localhost/resourceAPI');


// set up a port that defaults to 3000 unless there is a env variable
// (this will change in gulp)
let port = process.env.PORT || 3000;

// create a router to handle all end points for the API
let resourceRouter = express.Router();

// here is where you add all the endpoints for the resources API
resourceRouter.route('/Resources')
  .get((req, res) => {

    // *** DO THIS FIRST - then test a query in the browser
    //let query = req.query;                                                    //*

    // now do this
    // create an empty object
                                                    //*
    let query = {};

    // santize the querys so that just anything can't be thrown in the mix
    if (req.query.type){                                                        //*
      query.type = req.query.type;
    }                                                                           //.

    if (req.query.author){
      query.author = req.query.author;
    }

    if (req.query.read){
      query.read = req.query.read;                                              //*
    }



    // get all resources
    Resource.find(query, function(err, resources) {                             //*
    if(err){
        res.json(err);
      }else{
        res.json(resources);
      }
    });


    //let response = {msg: 'this is the GET API endpoint!'};
    //res.json(response);         // send json specifically

  });



// set a default static folder
app.use('/api', resourceRouter);

// setup a route
app.get('/', (req, res) => {                   // arrow functions
  res.send('Welcome to Express');
});

// begin listening on the port
app.listen(port, () => {
  console.log(`Now running on port: ${port}`);     // cheeky string literal
});
