/* https://leetcode.com/problems/power-of-two/

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

examples:
Input: n = 1
Output: true

Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false

P: number
R: boolean
E: ^
P: * i dont know the number being passed in
   first check to see if the number being passed is an integer
   then pass in the value of n inside Math.log2 function
   return
 */

const isPowerOfTwo = n => {
  return Number.isInteger(Math.log2(n))
}

//OR
// check to see if n is equal to 0, return false
// check to see while n is divisible by 2 with no remainders
// n is divided by or equal to 2
// n equals 1


const isPowerOfTwo = n => {
  if (n === 0) return false
  while (n % 2 === 0) {
    n /= 2
  }
  return n === 1
}

