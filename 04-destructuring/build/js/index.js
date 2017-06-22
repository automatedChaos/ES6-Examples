'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-22T22:01:10+01:00
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

function programming() {
  return ['loops', 'conditionals', 'arrays', 'boolean logic', 'string manipulation'];
}

// assign return array to individual vars
var tmp = programming(),
    feature1 = tmp[0],
    feature1 = tmp[3];

// your turn...


// TODO: Discussion 1 - discuss the ordering of the destructuring statement
function es6() {
  return {
    name: 'ECMAScript (ES5)',
    release: 2009
  };
}

var _es = es6(),
    x = _es.name,
    y = _es.release;

console.log(x, y);

// TODO: Activity 2 - What happens when you try to destructure a property that doesn't exist?
// fix the function below so the destructuring has a default value.
// note - see the different declaration for the object
var es5 = {
  name: 'ECMAScript (ES5)', // var is function scope (){} or global
  release: 2009
};

var a = es5.name,
    b = es5.organisation;

console.log(a, b);

// TODO: Activity 3 - Destructuring can be used to match paramters in function calls.

var es5Array = ['ECMAScript (ES5)', 2009];

function outputLang(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      rel = _ref2[1];

  console.log(name + ' was released in ' + rel);
}

outputLang(es5Array);

//