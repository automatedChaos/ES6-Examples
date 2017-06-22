"use strict";

/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-06-22T11:37:31+01:00
*
* An Immediately-Invoked Function Expression is used to avoid cross contamination
* of the global name space. In simple terms it is a function that is called immediately.
* If done right, this technique helps to contain the scope of vars declared within.
*
*/

// Before es6
(function () {

  console.log("Hello world");
})();

// After es6