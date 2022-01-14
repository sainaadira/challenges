/*
Given a non - negative integer, return an array / a list of the individual digits in order.

  Examples:

123 => [1, 2, 3]

1 => [1]

8675309 => [8, 6, 7, 5, 3, 0, 9] 

data working with: number 
returns: array of numbers

*/

// String() object is used to manipulate a sequence of chars
// split('') will convert substrings into an array
// map() calls a function of every element in the array and converts the 
//strings back into numbers
const digitize = n => String(n).split('').map(Number);


