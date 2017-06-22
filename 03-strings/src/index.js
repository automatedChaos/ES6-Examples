/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-22T20:50:31+01:00
*
* In this file we will dicuss the various improvements in es6 for handling
* strings.
*
*/


// Template literals
// ----------------------------------------------------------------
// TODO: Activity 1 - Previously, Javascript would become a soup of +'s and
// inverted commas when it comes to concatenating variables with string literals.
// Many other languages have much more efficient ways of doing this. Now with es6
// so does Javascript. Rewrite the example below to incorporate template literals.

// hint - use backticks instead of inverted commas

var language = {
  name: 'ECMAScript (ES5)',
  release: 2009
}

var other = ['Ruby', 'Java', 'PHP'];

console.log( 'The language ' + language.name + ' released in ' + language.release
              + '\nis far superior to ' + other[0] + ' and ' + other[1] + ' and '
              + other[2] + '.');

// Controversial! Now it is your turn
