'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-28T21:04:39+01:00
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
var Vehicle = function () {

  // Constructor - the function that is called when you instantiate a new object
  function Vehicle() {
    _classCallCheck(this, Vehicle);

    this.name = 'vehicle';
    this.speedX = 1;
    this.speedY = 0;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Vehicle, [{
    key: 'move',
    value: function move() {
      this.x += this.speedX;
      this.y += this.speedY;
      console.log(this.name + '\'s position - x:' + this.x + ', y:' + this.y);
    }
  }]);

  return Vehicle;
}();

var v1 = new Vehicle();

v1.move();
v1.move();
v1.move();

// Basic inheritance
// ----------------------------------------------------------------
// TODO: Activity 3 - There are many different types of vehicle from a unicycle
// to sports car. The various types of vehicle all need to inheret from the Vehicle
// class. Make a SuperCar class that inherets from Car.


// OBJECT 2

var Car = function (_Vehicle) {
  _inherits(Car, _Vehicle);

  function Car() {
    _classCallCheck(this, Car);

    var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this));

    _this.name = 'car'; // prototype chain - attributes bubble up through to parents
    _this.colour = 'blue';
    _this.spoiler = true;
    _this.doors = 3;
    return _this;
  }

  return Car;
}(Vehicle());

// This makes the Car class inheret the prototype of vehicle.
//Car.prototype = new Vehicle();

var v2 = new Car();
v2.move();