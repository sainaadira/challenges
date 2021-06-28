/* https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

P: [numbers]
R: [indexes of numbers adding up to target]  + 1
E: Input: numbers = [2,7,11,15], target = 9
   Output: [1,2]
   Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
P: brute force:
  loop through the [numbers], grab first index + 2nd index
  condtionally check if these indexes holding the number add up to target
  return those indices + 1

*/
// O(n^2)
const twoSum = (numbers, target) => {
  let len = numbers.length
  // loop through the array to grab first index
  for (let i = 0; i < len; i++) {
    // loop through the array to grab the second index
    for (let j = i + 1; j < len; j++) {
      // condtionally check if index1 + index 2 === target num
      if (numbers[i] + numbers[j] === target)
        // return array with 2 indexes [i,j] and add 1
        return [i + 1, j + 1]
    }
  }
}

// with hash map O(n)
const twoSum = (numbers, target) => {
  // add 0 to beginning of array
  numbers.unshift(0)
  // create object to hold numbers in arr
  let pairs = {}
  // loop through length of arr starting i at 1 (because i added to beginning of arr)
  for (let i = 1; i < numbers.length; i++) {
    // checking to see if numbers in pairs{} exists
    if (pairs[numbers[i]] >= 0) {
      /// if so, return the compliment number plus index
      return [pairs[numbers[i]], i]
    }
    // in my pairs {} subtract numbers from the target and set that to index
    pairs[target - numbers[i]] = i
  }
}