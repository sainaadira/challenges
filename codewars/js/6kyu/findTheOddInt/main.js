/*https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR

read about the XOR operator to get a better understanding of this solution.
 */

const findOdd = arr => arr.reduce((a, b) => a ^ b, 0)




// using O(n)
// loop through array
// filter through the array and check for the number of times odd number appears in array (using length)
// if odd appears, return that element
// otherwise return 0


const findOdd = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter(el => el == arr[i]).length % 2 != 0) return arr[i]
  }
  return 0
}




