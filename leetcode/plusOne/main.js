/* https://leetcode.com/problems/plus-one/submissions/
66. Plus One

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Input: digits = [9, 9]
Output: [1, 0, 0]
Explanation: The array represents the integer 99.

P: [num]
R: [num] => represents an integer
E: Input: digits = [9, 9]
   Output: [1, 0, 0]
   Explanation: The array represents the integer 99.
P: loop through the array backwards 
   set i to the end of the array
   check to see if digits are less than 9
  if so, add 1
  otherwise set digits[i] to 0

  edgecase: 99 + 1 = 100
  need to do the carry over system for adding 
  1 to a digit that ends in 9
  add 1 to the beginning of array with unshift()

*/



const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits.unshift(1)
  return digits

}
