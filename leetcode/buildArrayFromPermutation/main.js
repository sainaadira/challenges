/* https://leetcode.com/problems/build-array-from-permutation/
   1920. Build Array from Permutation

Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

P: [array of nums]
R: [ans of nums]
E: Input: nums = [0,2,1,5,3,4]
   Output: [0,1,2,4,5,3]

   Explanation:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]

P: create empty array for ans
  loop through nums array
  assign ans[i] = nums[nums[i]]
  return ans array
*/


const buildArray = nums => {
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]]
  }
  return ans
}

// map
const buildArray = nums => {
  return nums.map(val => nums[val])
}