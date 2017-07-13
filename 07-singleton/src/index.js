/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-06-21T15:03:12+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Unlocking Potential
* @Filename: index.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-07T10:08:16+01:00
*
* The singleton pattern is a great way of ensuring that a class is only instantiated
* once for the entire lifespan of the app. Any instantiation after the first, returns
* first instance.
*
*
* This worksheet draws upon the wisdom shared at:
* http://loredanacirstea.github.io/es6-design-patterns/#factory-method
*
*/


// Singleton
// ----------------------------------------------------------------
// TODO: Discussion 1 - The Singleton pattern ensures that a class can only be
// instantiated once on a global level. What might this pattern be useful for?
// Feel free to use google to help in this Discussion.
//
//
// TODO: Activity 1 - Comment out the line 'instance = this' and observe the
// difference in the output.

let instance = null;                    //

export default class Singleton{

    constructor() {

        if(!instance){
              instance = this;          // comment out this line and see what happens
        }

        return instance;
      }
}

let first = new Singleton();
let second = new Singleton();

console.log(first===second);



// ----------------------------------------------------------------
// TODO: Activity 2 - Research how static fields/properties in es7 can improve the
// declaritive style of the Singleton pattern.
