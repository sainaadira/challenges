/* 

Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

Note: You will be always given non-empty array containing Positive values. */

const sumOfMinimums = arr => {
  // first start with the sum of arrays being 0
  let sum = 0
  // i need to iterate ever the array to grab the length of arrays
  // to grab the minimum number from each row.
  for (let i = 0; i < arr.length; i++) {
    sum += Math.min(...arr[i])
    // using Math.min() to grab the minimum number from both arrays
    // the spread operator is used to expand the the Math.min() method to the 2D array

  } return sum
}

// using reduce()
function sumOfMinimums(arr) {
  return arr.reduce((a, b) => a + Math.min(...b), 0)
}
