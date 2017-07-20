/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-13T23:01:09+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename:
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-14T20:57:32+01:00
*/

const express = require('express');
const Resource = require('./../models/ResourceModel');

var routes = function(){

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

  // basic middleware to get the resoruce before we process it
                                                                                /* TODO: Add middleware */
  resourceRouter.use('/:id', (req, res, next) => {

    // find the resource
    Resource.findById(req.params.id, (err, resources) => {
      if(err){
        res.status(500).send(err); // Send an error code
      }else if (resources){
        console.log('Resource Found!');
        req.resources = resources;               // add the book to the req data
        next();
      }else{
        res.state(404).send('No Resource Found!')
      }
    });
  });                                                                           /* TODO: end */

  // same as the previoud route but with a param of id
  resourceRouter.route('/Resources/:id')
    .get((req, res) => {

      res.json(req.resources);                                                   /* TODO: Remove original get and add one line. B E A UTIFUL */

    })
    .put((req, res) => {
                                                                                /* TODO: Remove most of the put and make look like thus. */
        // update the values
        req.resources.title  = req.body.title;
        req.resources.author = req.body.author;
        req.resources.type   = req.body.type;
        req.resources.read   = req.body.req;

        // save the changes
        req.resources.save();

        // return the results
        res.json(req.resources);                                                /* TODO: end */

    });

    return resourceRouter;
};

module.exports = routes;
