"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-04T20:55:21+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: ClassTest.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-07T10:26:17+01:00
*/

var Utility = function () {
  function Utility() {
    _classCallCheck(this, Utility);

    console.log("Class Test");
  }

  _createClass(Utility, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("hello");
    }
  }]);

  return Utility;
}();

exports.default = Utility;