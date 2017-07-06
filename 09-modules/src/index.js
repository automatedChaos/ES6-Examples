/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: GiffGaff - SpaceJunk
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-06T21:37:12+01:00
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


import * as vector from './lib/vectors';
import Utility from './lib/utility'

let vec1 = {x: 10, y:5};

let vec2 = {x:2, y: 4};

console.log(vector.add(vec1, vec2));

console.log(vector.mult(vec1, vec2));       // fix this


let utility = new Utility();

utility.sayHello();


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
