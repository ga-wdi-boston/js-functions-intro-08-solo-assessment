'use strict';

// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function that returns its argument multiplied by itself
// stored it in the variable square

var square = function(x) {
  /* your code starts here */
  return x * x;
  /* your code ends here */
};

// Question 2
// write a function that returns x multiplied by x multiplied by x
// use the function square to perform one of those multiplications
// store the function in the variable named cube

/* your code starts here */
var cube = function(x) {
  return x * square(x);
};
/* your code ends here */

// Question 3
// write a function that returns x multiplied by x multiplied by
// x multiplied by x
// use the function square to perform  this calculation
// store the function in the variable name quad

/* your code starts here */
var quad = function(x) {
  return square(x) * square(x);
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
var inject = function(array, operation) {

  var result = 0;

  if (operation === undefined || operation === '+') {
    for (var i = 0; i < array.length; i++) {
      result += array[i];
    }

  } else if (operation === '*') {
    result = 1;
    for (var j = 0; j < array.length; j++) {
      result *= array[j];
    }
  } else if (operation === '-') {
    result = array[0];
    for (var k = 1; k < array.length; k++) {
      result -= array[k];
    }
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
  var largest = arguments[0];

  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > largest) {
      largest = arguments[i];
    }
  }

  return largest;
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
