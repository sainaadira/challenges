/* https://leetcode.com/problems/squares-of-a-sorted-array/
977. Squares of a Sorted Array
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 P: array of nums
 R: array of nums (squared via input array)
 E: Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100]
 P: i have an array of numbers
     i'll need to loop through the array
     (with either for loop, or map())
     Math.pow() to get squared numbers
     sort array in non-decreasing (ascending order)
 */

const sortedSquares = nums => {
  return nums.map(el => Math.pow(el, 2)).sort((a, b) => a - b, 0)

}

// O(n) solution
const sortedSquares = function (nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    // shorthand for Math.pow()
    result.push(nums[i] ** 2)
  }
  return result.sort((a, b) => a - b)
}