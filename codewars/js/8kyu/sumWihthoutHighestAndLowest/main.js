/* https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

P: array of numbers
R: number
E: [6, 2, 1, 8, 10 ] => 16
   [1, 1, 11, 2, 3 ] => 6
    
   brute force
P: sort array in ascending order
   remove the numbers from end of array pop()
   remove numbers from beginning of array
   sum reminaing numbers of array with reduce()
*/


// codewars wouldnt accept this answer but it works in replit

const sumArray = arr => {
  arr = arr.sort((a, b) => a - b)
  arr.pop()
  arr.shift()
  return arr.reduce((a, b) => a + b, 0)
}
sumArray([6, 2, 1, 8, 10]) // 16

// wouldnt accept this in codewars but works in replit
// sum all numbers in array
// subtract the max value Math.max(...array)
// subtract min value Math.min(...array)
function sumArray(array) {
  return array.reduce((a, b) => a + b) - Math.max(...array) - Math.min(...array)
}


// works for codewars
// check if arr param and length of array is greater than 1
// return sorted array  => .sort((a, b ) => a - b)
// slice array to grab highest/ lowest .slice(1, -1)
// add remaining elements in array with .reduce((a,c ) => a  + c ,0)
// otherwise return 0

// with ternary
const sumArray = arr => (
  (arr && arr.length > 1)
    ? arr
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((sum, number) => sum + number, 0)
    : 0
)



// one liner
const sumArray = array => {
  return array ? array.sort((a, b) => a - b).slice(1, -1).reduce((a, c) => a + c, 0) : 0
}


