/* https://leetcode.com/problems/remove-element/
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

P: array of numbers
 R: number (value of removed elements)
 E: nums = [3,2,2,3] val = 3 ||  => [2,2]
 P: iterate though the array
     check to see if all elements in array equals value
     splice(i,1) - to return deleted elements
    return remaining elements in array => nums.length
*/

const removeElement = (nums, val) => {
  if (!nums) return 0 // checks if nums arr is true
  for (let i = 0; i < nums.length; i++) {
    // if nums are equal to given value
    if (nums[i] === val) {
      //splice arr at index i and 1
      nums.splice(i, 1)
      // decrement i by one to reset postion once element is removed
      i--
    }
  }
  return nums.length
}