'use strict';

// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function that returns its argument multiplied by itself
// stored it in the variable square

var square = function(x) {
  var square;
  square = x * x;
  return square;
  // return x*x stored in the variable 'square'
};

// Question 2
// write a function that returns x multiplied by x multiplied by x
// use the function square to perform one of those multiplications
// store the function in the variable named cube

var cube = function(x) {
  var cube;
  cube = square(x) * x;
  return cube;
  // return square(x) * x and store in variable 'cube'
};

// Question 3
// write a function that returns x multiplied by x multiplied by
// x multiplied by x
// use the function square to perform  this calculation
// store the function in the variable name quad

var quad = function(x) {
  var quad;
  quad = cube(x) * x;
  return quad;
};

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

var inject = function(nums, operation) {
  var i;
  if (operation === '+' || operation === undefined) {
    var sum = 0;
    for (i = 0; i < nums.length; ++i) {
    sum += nums[i];
    }
    return sum;
  } else if (operation === '*') {
    var product = 1;
    for (i = 0; i < nums.length; i++) {
    product *= nums[i];
    }
    return product;
  } else if (operation === '-') {
    var result = nums[0];
    for (i = 1; i < nums.length; ++i) {
    result -= nums[i];
    }
    return result;
  }
};

// Question 5
// write a function that loops through zero or more numeric arguments
// and returns the largest number in that list
// store the function in the variable named max

var max = function(arguments) {
  // gen case - no need to solve case for no arguments because already returns
  // undefined
  var largest = arguments[0];
  for (var i = 1; i < arguments.length; ++i) {
    if (arguments[i] > largest) {
      largest = arguments[i];
    }
  }
  return largest;
};

// Used by testing
module.exports = {
  square: square,
  cube: cube,
  quad: quad,
  inject: inject,
  max: max
};
