/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-28T21:09:04+01:00
*
* es6 brings a new way to implement the prototype attribute that more closely
* simulates classical class-like inheritance. It provides a declarative class
* pattern that polyfills techniques shown in the previous worksheet.
*
* TIP: It might help to split the text editor so you can see worksheet 05 at
* the same time as this worksheet
*
*/


// Declarative vs. Expression class implementation
// ----------------------------------------------------------------
// TODO: Discussion 1 - Compare the declaritive form of class implementation below
// with the previous worksheet example, that uses the prototype attributes.

// OBJECT 1
class Vehicle{

  // Constructor - the function that is called when you instantiate a new object
  constructor(){
    this.name = 'vehicle';
    this.speedX = 1;
    this.speedY = 0;
    this.x = 0;
    this.y = 0;
  }

  move(){
    this.x += this.speedX;
    this.y += this.speedY;
    console.log(`${this.name}'s position - x:${this.x}, y:${this.y}`);
  }

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
class Car extends Vehicle(){

  constructor(){

    super();

    this.name = 'car';     // prototype chain - attributes bubble up through to parents
    this.colour = 'blue';
    this.spoiler = true;
    this.doors = 3;
  }
}

// This makes the Car class inheret the prototype of vehicle.
//Car.prototype = new Vehicle();

let v2 = new Car();
v2.move();




// Static
// ----------------------------------------------------------------
// TODO: Activity 3 - There are many different types of vehicle from a unicycle
// to sports car. The various types of vehicle all need to inheret from the Vehicle
// class. Make a SuperCar class that inherets from Car.















//
