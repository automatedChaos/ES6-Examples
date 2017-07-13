/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-04T20:21:03+01:00
* @Email:  alcwynparker@gmail.com
* @Project: GiffGaff - SpaceJunk
* @Filename: vectors.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-07T10:30:00+01:00
*/

/**
 * add - description
 *
 * @param  {Object} v1 {x:n, y:n} 2d vector object
 * @param  {Object} v2 {x:n, y:n} 2d vector object
 * @return {Object}    {x:n, y:n} 2d vector object - the sum of v1 & v2
 */
export function add(v1, v2){
  let x = v1.x + v2.x;
  let y = v1.y + v2.y;

  return {x: x, y: y};
}

/**
 * sub - description
 *
 * @param  {Object} v1 {x:n, y:n} 2d vector object
 * @param  {Object} v2 {x:n, y:n} 2d vector object
 * @return {Object}    {x:n, y:n} 2d vector object - subtraction of v1 & v2
 */
export function sub(v1, v2){
  let x = v1.x - v2.x;
  let y = v1.y - v2.y;

  return {x: x, y: y};
}

export function mult(v1, v2){
  let x = v1.x * v2.x;
  let y = v1.y * v2.y;

  return {x: x, y: y};
}
