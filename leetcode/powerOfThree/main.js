/* https://leetcode.com/problems/power-of-three/

Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

P: integer
R: boolean
E: input: 27
   output: true
   input: 4
   output: false
P: using input (n) check if that number is a power of three conditionally
  if so => true, otherwise => false
*/

// og answer accepted but wrong
const isPowerOfThree = n => {
  if (Math.pow(n, 3)) {
    return true
  }
  return false
}

// correct solution
// making sure n is greater than 0
// bc 0 is not a power of 3
// return power of three with a remainder of 0
//
const isPowerOfThree = n => {
  if (n > 0) {
    return Math.pow(3, 33) % n === 0
  }
}

/*
notes:
i was confused on Math.pow(3,33) instead of (n ** 3)
but i learned about Number.Max_safe_integer - constant represents the maxiumum safe integer in js
it has to be bigger than n or % wont be guaranteed to work.
 */

// another solution similar to power of 2
const isPowerOfThree = n => {
  if (n === 0) return false
  while (n % 3 === 0) {
    n /= 3
  }
  return n === 1
}