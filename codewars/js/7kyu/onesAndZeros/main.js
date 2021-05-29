/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

.

param: data working with: array
returns: number
examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
However, the arrays can have varying lengths, not just limited to 4

pseudocode:
convert my array of numbers into a number with parseInt
parse int takes 2 params, a string and a radix (usually 2)
*/



const binaryArrayToNumber = arr => {
  // parseInt converts to whole number
  //joining arr to string with a base of 2
  return parseInt(arr.join(''), 2)
};