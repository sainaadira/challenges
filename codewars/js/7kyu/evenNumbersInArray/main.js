/* https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

P: [nums]
R: [last even nums]
E: ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
P: given a number, i need to return the length of even numbers from an array using n
using above example: 4,6,8 are the last 3 even numbers in the array

first filter out the even numbers from the array
and grab the last even digits using slice() & N
return new array

*/

const evenNumbers = (array, number) => {
  let even = array.filter(num => num % 2 === 0)
  return even.slice(even.length - number)
}

// a one liner!
const evenNumbers = (arr, num) => arr.filter(el => el % 2 === 0).slice(-num)

