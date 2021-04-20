/*
https://www.codewars.com/kata/5417423f9e2e6c2f040002ae/train/javascript

Given a non - negative integer, return an array / a list of the individual digits in order.

  Examples:

123 => [1, 2, 3]

1 => [1]

8675309 => [8, 6, 7, 5, 3, 0, 9] 

data working with: number 
returns: array of numbers

*/


const digitize = n => {
  // String() object is used to manipulate a sequence of chars
  // split('') will convert substrings into an array
  // map() calls a function of every element in the array and converts the 
  //strings back into numbers
  return String(n).split('').map(Number);
}