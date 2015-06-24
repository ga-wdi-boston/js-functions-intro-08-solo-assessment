'use strict';

// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function that returns its argument multiplied by itself
// stored it in the variable square

var square = function(x) {
  return x*x;
};

//console.log(square(3));

// Question 2
// write a function that returns x multiplied by x multiplied by x
// use the function square to perform one of those multiplications
// store the function in the variable named cube

var cube = function(x) {
  return square(x)*x;
};

//console.log(cube(3));

// Question 3
// write a function that returns x multiplied by x multiplied by
// x multiplied by x
// use the function square to perform  this calculation
// store the function in the variable name quad

var quad = function(x) {
  return square(x) * square(x);
};

//console.log(quad(3));

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

//This solution isn't working:
var inject = function(numArray, operation) {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    if ((operation === undefined) || (operation = '+')) {
      total += arguments[i];
    } else if (operation === "*") {
      total *= arguments[i];
    } else if (operation === "-") {
      total -= arguments[i];
    }
  }
  return total;
};

//console.log(inject([2, 3], "+"));
// Question 5
// write a function that loops through zero or more numeric arguments
// and returns the largest number in that list
// store the function in the variable named max


//This solution isn't working:
//var max = function() {
//  var largest = Math.max(arguments);
//  return largest;
//};

//console.log(max(1, 2, 3, 4));


var max = function() {
  var sortedArray = arguments.sort();
  return sortedArray;
/*  var largest;
  for (i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] > sortedArray[i - 1]) {
      largest = sortedArray[i];
    }
  }
  return largest;*/
}

console.log([3, 2]);

// Used by testing
module.exports = {
  square: square,
  cube: cube,
  quad: quad,
  inject: inject,
  max: max
};
