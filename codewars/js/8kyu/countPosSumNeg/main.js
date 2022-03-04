/*
https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.


P: [integers]
R: [count, sum]
E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] => [10, -65]

Pseudocode:
-check if the input array is empty or null, if so return []
- iterate (map) through the array and check for postive whole numbers, increment count
- check for negative numbers and call reduce() to get single value (total)
-return array

 */
// this solution works but it doesn't pass 1 of the tests on codewars 

const countPositivesSumNegatives = input => {
  if (input.length === null || input.length === 0) return []
  let positive = input.filter(num => num > 0).length
  let negative = input.filter(num => num < 0).reduce((a, b) => a - -b, 0)
  return [positive, negative]
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], '[10, -65]')


// this solution passed all tests 
const countPositivesSumNegatives = input => {
  return input && input.length ? [input.filter(pos => pos > 0).length, input.filter(neg => neg < 0).reduce((a, b) => a + b, 0)] : []
}