'use strict';

// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function that returns its argument multiplied by itself
// stored it in the variable square

var square = function(x) {
  /* your code starts here */
  x = x * x;
  return x;
  /* your code ends here */
};

// Question 2
// write a function that returns x multiplied by x multiplied by x
// use the function square to perform one of those multiplications
// store the function in the variable named cube

/* your code starts here */
var cube = function(x) {
  x = square(x) * x;
  return x;
};

var result = 4;
result = cube(result);

/* your code ends here */

// Question 3
// write a function that returns x multiplied by x multiplied by
// x multiplied by x
// use the function square to perform  this calculation
// store the function in the variable name quad

/* your code starts here */
var quad = function(x) {
  var result = 0;
  result = square(square(x));
  return result;
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
var inject = function(inputArray, operation) {
  //unneccessary variable definition. I wanted to be sure I was getting the right variable back, but I could've just done 'result' for each of them, and stuffed result full of the value I wanted returned regardless of the operation command.
  var sum = 0;
  var product = inputArray[0];
  var weirdSubtraction = 0;
  if(operation === '+' || operation === undefined)
  {
    for(var i = 0; i < inputArray.length; i++)
    {
      sum += inputArray[i];
    }
    return sum;
  }
  else if(operation === '*')
  {
    for(var i = 1; i < inputArray.length; i++)
    {
      product *= inputArray[i];
    }
    return product;
  }
  else if(operation === '-')
  {
    for(var i = 1; i < inputArray.length; i++)
    {
      console.log('At the start of the for loop, weird subtraction is : ' + weirdSubtraction);
      weirdSubtraction = inputArray[i] + weirdSubtraction;
      console.log('At the end of the for loop, weird subtraction is : ' + weirdSubtraction);
    }
    weirdSubtraction = inputArray[0] - weirdSubtraction;
    console.log('At the end of the -- section, weird subtraction is : ' + weirdSubtraction);
    return weirdSubtraction;
    // for(var i = 1; i < inputArray.length; i++)
    // {
    //   weirdSubtraction -= inputArray[i];
    // }
    // console.log(weirdSubtraction);
    // return weirdSubtraction;
  }
};

console.log(inject([12, 4, 3, 2, 0], '-'));
/* your code ends here */

// Question 5
// write a function that loops through zero or more numeric arguments
// and returns the largest number in that list
// store the function in the variable named max

/* your code starts here */
var max = function() {
  var largest = arguments[0];
  for(var i = 0; i < arguments.length; i++)
  {
    if(arguments[i] > largest)
    {
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
