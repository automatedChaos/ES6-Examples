/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-22T21:36:47+01:00
*
* Destructuring is new syntatic feature for es6. Kyle Simpson, author of ES6 & beyond
* suggests it is easier to think to destructuring as, 'structured assignment'.
* it acts as a way of packing and unpacking var to pass as input and return params.
* There is much more to it than that, but its a good start.
*
*/


// Structured Assignments
// ----------------------------------------------------------------
// TODO: Activity 1 - Find a better way of assigning the items from the returned
// array to individual variables - Google de

function programming(){
  return ['loops', 'conditionals', 'arrays', 'boolean logic', 'string manipulation' ];
}

// assign return array to individual vars
var tmp = programming(), feature1 = tmp[0], feature1 = tmp[3];

// your turn...




// TODO: Discussion 1 - discuss the ordering of the destructuring statement
function es6(){
  return {
    name: 'ECMAScript (ES5)',
    release: 2009
  };
}

var {name: x, release: y} = es6();
console.log(x, y);
