'use strict';

// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function that returns its argument multiplied by itself
// stored it in the variable square

var square = function(first, second) {
  var multiplyIt = [];
  var total = 0;
  var first = 0;
  var second = 0;
   if (arguments.length >= 0) {
    for (var i = 0; i < arguments.length; i++) {
      total = first * second;
    }
   }
   return total;
};

var result = square([1, 2]);

console.log("Result: " + result);

// Question 2
// write a function that returns x multiplied by x multiplied by x
// use the function square to perform one of those multiplications
// store the function in the variable named cube

var cube = function(times) {
  var newTimes = {};
  var newTotal = 0;
  var callSquare = square();

  for (var i = 0; i < 3; i++) {
    newTimes[square[i] * newTotal++];
  }

var tripleTimes = [];
for (var key in newTimes) {
  tripleTimes.push(key);
}
return tripleTimes
};

var newMath = cube(square);
console.log(newMath);

/* your code ends here */

// Question 3
// write a function that returns x multiplied by x multiplied by
// x multiplied by x
// use the function square to perform  this calculation
// store the function in the variable name quad

/* your code starts here */
var quad = function(fourths) {
  var timesFour = {};
  var increaseTotal = 0;
  var callSquare = square();

  for (var i = 0; i < 5; i++) {
    timesFour[square[i] * increaseTotal++];
  }

  var fourTimes = [];
  for (var key in timesFour) {
    fourTimes.push(key);
  }
  return fourTimes;
};

var fourMath = quad(square);
console.log(fourMath);

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
/* your code ends here */

// Question 5
// write a function that loops through zero or more numeric arguments
// and returns the largest number in that list
// store the function in the variable named max

/* your code starts here */
var max;
/* your code ends here */

// Used by testing
module.exports = {
  square: square,
  cube: cube,
  quad: quad,
  inject: inject,
  max: max
};
