'use strict';

// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function that returns its argument multiplied by itself
// stored it in the variable square

var square = function(x) {
 return (x * x);
};

//console.log(square(5));

// Question 2
// write a function that returns x multiplied by x multiplied by x
// use the function square to perform one of those multiplications
// store the function in the variable named cube

var cube = function(x) {
  var x;
  return (square(x) * x);
}
//console.log(cube(3));

//var cube;


// Question 3
// write a function that returns x multiplied by x multiplied by
// x multiplied by x
// use the function square to perform  this calculation
// store the function in the variable name quad

var quad = function(x) {
  var x;
  return (cube(x) * x);
}
console.log(quad(5));
//var quad;


// Question 4
// write a function and store it in the variable named inject
// It should expect an array of numbers as the first argument
// and an optional second argument, operation.
// If operation is undefined or '+', inject should return the result of
//   adding all the numbers together.
// If operation is '*', inject should return the result of multiplying
//   all the numbers together.
// If operation is '-', inject should return the result of subtracting
//   the second through last number from the first

/* your code starts here */
var inject;
/* your code ends here */

// Question 5
// write a function that loops through zero or more numeric arguments
// and returns the largest number in that list
// store the function in the variable named max

var max = function(nums){

}
//Still working on this!  Not even sure if function(nums) will do the trick at this point.

//var max;


// Used by testing
module.exports = {
  square: square,
  cube: cube,
  quad: quad,
  inject: inject,
  max: max
};
