/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-13T23:01:09+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename:
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-14T11:28:17+01:00
*/

const express = require('express');
const Resource = require('./../models/ResourceModel');

var routes = function(){
                                                                                /* TODO: Paste the code into a function */
  // create a router to handle all end points for the API
  let resourceRouter = express.Router();

  // here is where you add all the endpoints for the resources API
  resourceRouter.route('/Resources')
    .post((req, res) => {

      var resource = new Resource(req.body);
      resource.save();
      res.status(201).send(resource);

    })
    .get((req, res) => {

      // create an empty object
      let query = {};

      // santize the querys so that just anything can't be thrown in the mix
      if (req.query.type){ query.type = req.query.type; }
      if (req.query.author){ query.author = req.query.author; }
      if (req.query.read){  query.read = req.query.read; }

      // get all resources
      Resource.find(query, function(err, resources) {
      if(err){
          res.json(err);
        }else{
          res.json(resources);
        }
      });

    });

  // same as the previoud route but with a param of id
  resourceRouter.route('/Resources/:id')
    .get((req, res) => {

      // new method to findbyId
      Resource.findById(req.params.id, (err, resources) => {
        if(err){
          res.status(500).send(err); // Send an error code
        }else{
          res.json(resources);
        }
      });
    })
    .put((req, res) => {                                                        /* TODO:  */
      // new method to findbyId
      Resource.findById(req.params.id, (err, resources) => {
        if(err){
          res.status(500).send(err); // Send an error code
        }else{

          // update the values
          resources.title  = req.body.title;
          resources.author = req.body.author;
          resources.type   = req.body.type;
          resources.read   = req.body.req;

          // save the changes
          resources.save();

          // return the results
          res.json(resources);
        }
      });
    });

    return resourceRouter;
};

module.exports = routes;
