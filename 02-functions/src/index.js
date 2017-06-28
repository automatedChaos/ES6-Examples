/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-23T10:58:00+01:00
*
* in this file we will look at functions and the various new features and techniques
* that have arrived with es6
*
*/


// Arrow Functions
// ----------------------------------------------------------------
// TODO: Discussion 1 - look at the differences between functions and arrow functions,
// what are the pros and cons of each?

// Example 1: Standard Function
var oldLangName = 'ECMAScript (ES5)';    // var is function scope (){} or global
var oldLangRelDate = 2009

/**
 * outputOldLang - function to output display text for language and released
 * date.
 *
 * @param  {String} string1 the version
 * @param  {String} string2 the release date
 * @return {String}         returns a diplay sentence
 */
function outputOldLang(string1, string2){
  var output = string1 + ' was released in ' + string2;
  return output;
}

// call function
console.log(outputOldLang( oldLangName, oldLangRelDate ));


// Example 2: Arrow Function
const newLangName = 'ECMAScript 2015 (ES6)';   // const is block scoped and is read-only
let newLangRelDate = 2015;           // let is block scope {}

const calc = (num1, num2) => {return num1 + num2};

// Arrow function
const outputNewLang = (string1, string2) => {
  let output = string1 + ' was released in ' + string2;
  return output;
};

console.log(outputNewLang(newLangName, newLangRelDate));



// Imediately-Invoked function Expression (IIFE)
// ----------------------------------------------------------------
// TODO: Action 1 - Using what you have learnt from the previous activity
// convert a IIFE into an arrow function (you can use google to help find
// the answer)

// An IIFE is used to isoloate your script from the rest of the code base.
// this is especially useful in modules. We will dicuss this in great detail
// later on. for now it is just best practice to wrap your code in an IIFE to
// safe guard the code base.

(function() {
    console.log('This function will run as soon as the IIFE has been parsed and created.');
})();

// your turn...




// function parameters
// ----------------------------------------------------------------
// TODO: Action 2 - The code below loops through an array and calls the function sayItsGood()
// with each item as a parameter. We can use the es6 spread and rest functionality
// to greatly improve the readability and efficiency of our code. Research these techniques
// write a new version of this code below (ps. there are many different ways)

let bestThings = ['promises', 'destructuring', 'OOP Patterns'];

function sayItsGood(thing){
  console.log(thing + ' are good!')
}

for (let i = 0; i < bestThings.length; i++){
  sayItsGood(bestThings[i]);
}


// heres a clue:
//console.log(...bestThings);

// your turn...


// Added extra: this technique has many applications
let nums1 = [3, 4, 5];
let nums2 = [1, 2, ...nums1, 6, 7];

console.log(nums2);



// TODO: Action 3 - traditionally we use a work around to implement default
// parameters for a function. The function below demonstrates that work around.
// write a function that uses es6 instead of the work around.

function repeat(num, word){

  num = num || 3;
  word = word || 'es6'

  for (let i = 0; i < num; i++){
    console.log(word);
  }
}

repeat();
repeat(2, 'es5');

// your turn...
