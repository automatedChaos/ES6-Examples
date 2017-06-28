/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-28T17:02:43+01:00
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


// OBJECT 1
function Vehicle(){

  this.speedX = 1;
  this.speedY = 0;
  this.x = 0;
  this.y = 0;

}

Vehicle.prototype.move = function(){
  this.x += this.speedX;
  this.y += this.speedY;
}

// OBJECT 2
function Car(){
  this.colour = 'blue';
  this.spoiler = true;
  this.doors = 3;
}
