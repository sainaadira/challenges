/*
https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6


data working with: array
returns: number

pseudocode:
- create array to store result
- loop through the array until i get to last el and increment by 1
 - length of array is not specified so need .length
- grab all elemements and multiply to adjacent
- return the result of the max product of the array

*/

const adjacentElementsProduct = array => {
  // empty array to store result
  let newArr = []
  // loop though arr (with unknown length)
  for (i = 0; i < array.length - 1; i++) {
    // multiply all adjacent elements and push to newArr
    newArr.push(array[i] * array[i + 1])
  }
  // return the largest product from newArr
  return Math.max(...newArr)
}

adjacentElementsProduct([1, 2, 3])