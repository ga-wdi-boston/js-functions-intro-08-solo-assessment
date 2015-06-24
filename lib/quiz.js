'use strict';

// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function that returns its argument multiplied by itself
// stored it in the variable square

var square = function(x) {
  /* your code starts here */
  var arg = x * x;
  return arg;
  /* your code ends here */
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
var inject = function(someArg, operation) {
  if (operation === undefined || operation === '+') {
    var sumOfArgs = 0;
    for (var i = 0; i < someArg.length; i++) {
      sumOfArgs += someArg[i];
    }
    return sumOfArgs;
  } else if (operation === '*') {
    var multipliedArgs = 1;
    for (var ii = 0; ii < someArg.length; ii++) {
      multipliedArgs *= someArg[ii];
    }
    return multipliedArgs;
  } else if (operation === '-') {
    var subtractedArgs = someArg[0];
    for (var iii = 1; iii < someArg.length; iii++) {
      subtractedArgs -= someArg[iii];
    }
    return subtractedArgs;
  }
};
/* your code ends here */

// Question 5
// write a function that loops through zero or more numeric arguments
// and returns the largest number in that list
// store the function in the variable named max

/* your code starts here */
var max = function() {
  var largestArg = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    if (largestArg < arguments[i]) {
      largestArg = arguments[i];
    }
  }
  return largestArg;
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
