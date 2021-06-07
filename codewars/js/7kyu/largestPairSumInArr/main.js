/*
https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.


P: array of numbers
R: number => with sum of largest numbers
E: [1,2,3] => 6
P: create variable to hold the sums of largest + second largest numbers
   find largest numbers in array (look up how)
   found it! numbers.sort((a, b) => a - b)[0]
             numbers.sort((a, b) => a - b)[1]
   add their values
   return string
*/


const largestPairSum = numbers => {
  let first = numbers.sort((a, b) => b - a)[0]
  let second = numbers.sort((a, b) => b - a)[1]
  return first + second
}