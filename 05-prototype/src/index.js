/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-28T20:16:49+01:00
*
* All functiosn in JS have a prototype attribute where properties and behaviours can be
* attached. Javascript does not allow for classical inheritance like many over programming languages.
* The prototype attribute allows JS developers to emulate inheritance. This work sheet explores
* the prototype attribute and how it can be used.
*
*/


// A standard function with a prototype behaviour
// ----------------------------------------------------------------
// TODO: Activity 1 - Fix the error in the code below.
// (hint: check the scope of the vars)
//
// TODO: Activity 2 - Add a behaviour to the Vehicle prototype that
// stops the vehicle instantly.


// OBJECT 1
function Vehicle(){
  // Constructor --> the function that is called when you instantiate a new object
  this.name = 'vehicle';
  this.speedX = 1;
  this.speedY = 0;
  this.x = 0;
  this.y = 0;

}

Vehicle.prototype.move = function(){
  this.x += this.speedX;
  this.y += this.speedY;
  console.log(`${this.name}'s position - x:${this.x}, y:${this.y}`);
}

let v1 = new Vehicle();

v1.move();
v1.move();
v1.move();


// Basic inheritance
// ----------------------------------------------------------------
// TODO: Activity 3 - There are many different types of vehicle from a unicycle
// to sports car. The various types of vehicle all need to inheret from the Vehicle
// class. Make a SuperCar class that inherets from Car.


// OBJECT 2
function Car(){
  this.name = 'car';     // prototype chain - attributes bubble up through to parents
  this.colour = 'blue';
  this.spoiler = true;
  this.doors = 3;
}

// This makes the Car class inheret the prototype of vehicle.
Car.prototype = new Vehicle();

let v2 = new Car();
v2.move();
