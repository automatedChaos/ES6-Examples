"use strict";

/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-28T16:55:54+01:00
*
* All functiosn in JS have a prototype attribute where properties and behaviours can be
* attached. Javascript does not allow for classical inheritance like many over programming languages.
* The prototype attribute allows JS developers to emulate inheritance. This work sheet explores
* the prototype attribute and how it can be used.
*
*/

// A standard function
// ----------------------------------------------------------------
// TODO: Activity 1

function Vehicle() {

  this.passengers = 0;
  this.speedX = 1;
  this.speedY = 0;
  this.x = 0;
  this.y = 0;
}

Vehicle.prototype.move = function () {
  this;
};