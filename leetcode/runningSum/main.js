/* https://leetcode.com/problems/running-sum-of-1d-array/
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

P: array of #
R: array of # with running sum of input arr
E: Input: nums = [1,2,3,4]
   Output: [1,3,6,10]
P: create empty arr to store result
   variable to hold sum start at 0
   loop though input arr (nums)
   sum + sum = nums[i] <- add nums[i] to sum
   push sum into array
   return array
 */

// o(n) is faster
const runningSum = nums => {
  let arr = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    arr.push(sum += nums[i])
  }
  return arr
}

// using map() -- calling function on every element in arr and returns new arr
const runningSum = nums => {
  let value = 0
  let sum = nums.map(res => value += res)
  return sum
}

