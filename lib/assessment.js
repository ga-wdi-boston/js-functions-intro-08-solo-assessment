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
var cube;
cube = function(x) {
  return x * square(x);
}
/* your code ends here */

// Question 3
// write a function that returns x multiplied by x multiplied by
// x multiplied by x
// use the function square to perform  this calculation
// store the function in the variable name quad

/* your code starts here */
var quad;
quad = function(x) {
  return square(x) * square(x);
}
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
var inject;
inject = function(myarray, operation) {
  var result;
  if (myarray.length === 0) {
    return undefined; // if user gives empty array
  }
  if (operation === undefined || operation === '+') {
    var result = myarray[0];
    // Start at 2nd element, or index 1
    for (var i = 1; i < myarray.length; i++) {
      result += myarray[i];
    }
  }
  else if (operation === '*') {
    var result = myarray[0];
    for (i = 1; i < myarray.length; i++) {
      result *= myarray[i];
    }
  }
  else if (operation === '-') {
    var result = myarray[0];
    for (i = 1; i < myarray.length; i++) {
      result -= myarray[i];
    }
  }
  return result;
}

/* your code ends here */

// Question 5
// write a function that loops through zero or more numeric arguments
// and returns the largest number in that list
// store the function in the variable named max

/* your code starts here */
var max;
max = function() {
  // Return undefined if user gave zero arguments
  if (arguments.length === 0) {
    return undefined;
  }
  var largest = arguments[0] // set first number to largest
  // Start at 1, since we handled 0
  for (var i = 1; i < arguments.length; i++) {
    // Only try to check this if the type is number
    if (arguments[i] > largest) {
      largest = arguments[i];
    }
  }
  return largest;
}

/* your code ends here */

// Used by testing
module.exports = {
  square: square,
  cube: cube,
  quad: quad,
  inject: inject,
  max: max
};
