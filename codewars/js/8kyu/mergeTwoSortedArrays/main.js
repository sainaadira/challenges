/*
https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

data working with: array
returns: array

*/

const mergeArrays = (arr1, arr2) => {
  // removing duplicates from the array with spread syntax
  // merge two arrays with spread syntax
  // sort the arr ascending order with sort method
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b)
}

// second solution
const mergeArrays = (arr1, arr2) => {
  // joining the two arrays into one using spread syntax
  let joined = [...arr1, ...arr2]
  return joined
    // sort through joined array in ascending order
    .sort((a, b) => a - b)
    // filter through joined arr and return a new array of elements where the the elements equal the index: removes all duplicates
    .filter((el, index, arr) => {
      return arr.indexOf(el) === index
    })
}