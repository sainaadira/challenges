/* https://leetcode.com/problems/single-number/submissions/
136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:


P: [nums]
R: number (single occurence in array)
E: Input: nums = [4,1,2,1,2]
          Output: 4

  Input: nums = [2,2,1]
          Output: 1

P: create empy object to create count of numbers in array
   loop through all the numbers in array
   check to see if the number exists as a key inside of the object
   if not, create it and set equal to 1
   otherwise incrememnt by 1

   loop through object
   check if the occurence equals 1
   return the number

*/


const singleNumber = nums => {
  let numMap = {}
  // loops through array
  for (number of nums) {
    if (!numMap[number]) {
      numMap[number] = 1
    } else {
      numMap[number]++
    }
  }
  // loops through object
  for (number in numMap) {
    if (numMap[number] === 1) {
      return number
    }
  }
}