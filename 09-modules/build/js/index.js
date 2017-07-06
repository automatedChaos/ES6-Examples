'use strict';

var _vectors = require('./lib/vectors');

var vector = _interopRequireWildcard(_vectors);

var _utility = require('./lib/utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: GiffGaff - SpaceJunk
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-06T20:52:31+01:00
*/

var vec1 = { x: 10, y: 5 };

var vec2 = { x: 2, y: 4 };

console.log(vector.add(vec1, vec2));

console.log(vector.mult(vec1, vec2)); // fix this 


var utility = new _utility2.default();

utility.sayHello();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import