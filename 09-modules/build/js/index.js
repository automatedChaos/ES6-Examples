'use strict';

var _vectors = require('./lib/vectors');

var _utility = require('./lib/utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: GiffGaff - SpaceJunk
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-07T10:30:29+01:00
*
* Before es6, modules were the domain of commonJS and AMD (Asynchronous Module Design).
* Node standardised upon the commonJS format. Es6 brings a much simpler but slightly
* wilder methods of creating modules.
*
*/

// TODO:
// ----------------------------------------------------------------
//
// • Identify the difference between the two inports
// • Fix the error by investigating the vector module.
// • Research the various ways of importing properties and methods from modules (follow link at the bottom)
// • Research the different between es6 & commonJS modules.
// (hint: Search for tutorials on creating Node modules, as these follow the
//  commonJS standard)
//


var vec1 = { x: 10, y: 5 };

var vec2 = { x: 2, y: 4 };

console.log((0, _vectors.add)(vec1, vec2));

console.log((0, _vectors.mult)(vec1, vec2)); // fix this


var utility = new _utility2.default();

utility.sayHello();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import