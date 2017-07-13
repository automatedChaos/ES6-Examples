/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-12T22:06:10+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking potential
* @Filename: ResourceModel.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-13T21:49:03+01:00
*
*  The ResourceModel outlines the Schema of the data, that is the structure,
*  data type, default values and any other important information about the
*  resource that is being stored.
*
*  This model only scratches the surface of what mongoose can do
*/

// import mongoose and pull in the Schema class.
const mongoose = require('mongoose');

// create the new schema
var resourceModel = mongoose.Schema({
  title: {type: String},
  author: {type: String},
  type: {type: String},
  read: {type: Boolean, default: false}
});

// load the schema into mongoose and return it.
module.exports = mongoose.model('resources', resourceModel);
