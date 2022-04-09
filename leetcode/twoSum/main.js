/* https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// brute force O(n^2)
const twoSum = (nums, target) => {
  let numbers = nums.length
  for (let i = 0; i <= numbers; i++) {
    for (let j = i + 1; j <= numbers; j++) {
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }
}


//hash map: O(n) 
const twoSum = (nums, target) => {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[[nums[i]]] >= 0) {
      return [map[nums[i], i]]
    }
    map[target - nums[i]] = i
  }
}