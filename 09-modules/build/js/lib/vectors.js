"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.sub = sub;
/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-04T20:21:03+01:00
* @Email:  alcwynparker@gmail.com
* @Project: GiffGaff - SpaceJunk
* @Filename: vectors.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-06T20:52:00+01:00
*/

/**
 * add - description
 *
 * @param  {Object} v1 {x:n, y:n} 2d vector object
 * @param  {Object} v2 {x:n, y:n} 2d vector object
 * @return {Object}    {x:n, y:n} 2d vector object - the sum of v1 & v2
 */
function add(v1, v2) {
  var x = v1.x + v2.x;
  var y = v1.y + v2.y;

  return { x: x, y: y };
}

/**
 * sub - description
 *
 * @param  {Object} v1 {x:n, y:n} 2d vector object
 * @param  {Object} v2 {x:n, y:n} 2d vector object
 * @return {Object}    {x:n, y:n} 2d vector object - subtraction of v1 & v2
 */
function sub(v1, v2) {
  var x = v1.x - v2.x;
  var y = v1.y - v2.y;

  return { x: x, y: y };
}

function mult(v1, v2) {
  var x = v1.x * v2.x;
  var y = v1.y * v2.y;

  return { x: x, y: y };
}