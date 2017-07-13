/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-12T21:21:51+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: app.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-13T23:19:09+01:00
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

const bodyParser = require('body-parser');
                                                /* TODO: note execution; */
const resourceRouter = require('./routes/ResourceRoutes')();

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

// setup middleware to read the POST data
// if there is json in the body then this will make it available using req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

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
