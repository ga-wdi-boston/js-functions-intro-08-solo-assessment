'use strict';

// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function that returns its argument multiplied by itself
// stored it in the variable square

var square = function(x) {
  return x * x;
};
// Question 2
// write a function that returns x multiplied by x multiplied by x
// use the function square to perform one of those multiplications
// store the function in the variable named cube

/* your code starts here */
var cube = function(x) {
  return square(x) * x;
};
/* your code ends here */

// Question 3
// write a function that returns x multiplied by x multiplied by
// x multiplied by x
// use the function square to perform  this calculation
// store the function in the variable name quad

/* your code starts here */
var quad = function(x) {
  return square(square(x));
};
/* your code ends here */

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
var inject = function(nums, option) {
  // keeping track of the result
  var result = 0;
  if(!option || option === '+') {
    // '+' option
    result = 0;
    for(var i = 0; i < nums.length; ++i) {
      result += nums[i];
    }
  } else if (option === '*') {
    // '*' option
    result = 1;
    for (var i = 0; i < nums.length; ++i) {
      result *= nums[i];
    }
    return result;
  } else  if (option === '-' ) {
    // '-' option
    result = nums[0];
    for (var i = 1; i < nums.length; ++i) {
      result -= nums[i];
    }
    return result;
  }
  return result;
};
/* your code ends here */

// Question 5
// write a function that loops through zero or more numeric arguments
// and returns the largest number in that list
// store the function in the variable named max

/* your code starts here */
var max = function() {

  var currentMax = arguments[0];
  for (var i = 1; i < arguments.length; ++i) {
    if (arguments[i] > currentMax) {
      // update the current max if it finds a larger number
      currentMax = arguments[i];
    }
  }
  return currentMax;
};
/* your code ends here */

// Used by testing
module.exports = {
  square: square,
  cube: cube,
  quad: quad,
  inject: inject,
  max: max
};
