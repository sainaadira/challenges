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
P: sort the numbers in desending order
   largest comes first, 2nd will follow
   add the two values
   return sum
*/


const largestPairSum = nums => {
  nums.sort((a, b) => b - a)
  return nums[0] + nums[1]
}