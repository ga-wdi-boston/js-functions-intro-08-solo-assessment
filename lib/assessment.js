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

var inject = function(numberArray, operation) {
  var inject;
  if (operation === undefined || operation === '+') {
    var sum = 0;
    sum += numberArray[i];
    return sum;
  }
  if (operation === '*') {
    for (var i = 0; i < numberArray.length; i++) {
      var mult;
      mult = numberArray[i] * numberArray[i++];
      return mult;
    }
  }
  if (operation === '-') {
    var sub;
    sub = numberArray[0]-(numberArray[i]);
    return sub;
  }
};

// Question 5
// write a function that loops through zero or more numeric arguments
// and returns the largest number in that list
// store the function in the variable named max

var max = function(numArgs) {
  if (numArgs) {
    numLargest = 0;
    for (var i = 0; i < numArgs.length; i++) {
      if (numArgs[i] > numLargest) {
        var max = numArgs[i];
        return max;
      }
    }
  }
};


// Used by testing
module.exports = {
  square: square,
  cube: cube,
  quad: quad,
  inject: inject,
  max: max
};
