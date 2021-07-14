/* https://leetcode.com/problems/remove-duplicates-from-sorted-array/solution/
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

P: array of nums
R: number
E: [1,1,2] => [1,2]
P: set variable to handle index counting and initalize to 0
   loop though nums array
   check if all elements does not equal the one  before it
   assign nums[0 (indexCounter)] to equal elements in nums array
   increment counter by 1
   return indexCounter
   

*/

const removeDuplicates = nums => {
  let indexCounter = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[indexCounter] = nums[i]
      indexCounter++
    }
  }
  return indexCounter
}