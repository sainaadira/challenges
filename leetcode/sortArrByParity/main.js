/* https://leetcode.com/problems/sort-array-by-parity/
   905. Sort Array By Parity

Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums.

You may return any answer array that satisfies this condition.


P: array of nums
R: array containing odd and even pairs
E: Input: nums = [3,1,2,4]
   Output: [2,4,3,1]
   The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
P: check for even + odd numbers in num arr with filter()
   return new arrau with [...even, ...odd]

   OR O(N)
   create empty arr for even and odd numbers
   loop through num array
   conditionally check for even numbers, push into even arr
   otherwise push remaining (odd) numbers into odd arr
   return [...even, ...odd]
*/

const sortArrayByParity = nums => {
  let even = nums.filter(el => el % 2 === 0)
  let odd = nums.filter(el => el % 2 === 1)
  return [...even, ...odd]
}


// with for loop: O(n)
const sortArrayByParity = nums => {
  let even = []
  let odd = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i])
    } else {
      odd.push(nums[i])
    }
  }
  return [...even, ...odd]
}

