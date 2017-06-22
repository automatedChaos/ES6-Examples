/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-22T18:09:12+01:00
*
* in this file we will look at functions and the various new features and techniques
* that have arrived with es6
*
*/


// Arrow Functions
// ----------------------------------------------------------------
// Action : Discussion - look at the differences between functions and arrow functions,
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


// Arrow function
const outputNewLang = (string1, string2) => {
  let output = string1 + ' was released in ' + string2;
  return output;
};

console.log(outputNewLang(newLangName, newLangRelDate));



// Imediately-Invoked function Expression (IIFE)
// ----------------------------------------------------------------
// Action : Using what you have learnt from the previous activity
// convert a IIFE into an arrow function (you can use google to help find
// the answer)

// An IIFE is used to isoloate your script from the rest of the code base.
// this is especially useful in modules. We will dicuss this in great detail
// later on. for now it is just best practice to wrap your code in an IIFE to
// safe guard the code base.

(function() {
    console.log('I run as soon as the IIFE has been parsed and created.');
})();

// your turn....
