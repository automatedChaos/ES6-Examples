/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-22T17:42:58+01:00
*
*
*/

// Out with the old, in with the new! (kind of)
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


// ----------------------------------------------------------------
// After es6
const newLangName = 'ECMAScript 2015 (ES6)';   // const is block scoped and is read-only
let newLangRelDate = 2015;           // let is block scope {}

// Action : Discussion - look at the differences between functions and arrow functions,
// what are the pros and cons of each?

// Arrow function
let outputNewLang = (string1, string2) => {
  let output = string1 + ' was released in ' + string2;
  return output;
};

console.log(outputNewLang(newLangName, newLangRelDate));
