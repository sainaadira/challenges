// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

// Task
// Given an array of integers, Find the minimum sum which is obtained from summing each Two integers product.

//   Notes
// Array / list will contain positives only.
//   Array / list will always has even size
// Input >> Output Examples
// minSum({ 5, 4, 2, 3}) ==> return (22) 


const minSum = (arr) => {
  const sorted = arr.sort((a, b) => a - b)
  let sum = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    sum += sorted[i] * sorted[sorted.length - 1 - i]
  }
}