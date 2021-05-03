/*
https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript

Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];

data working with: array of strings
returns: array

*/

const first = (arr, n = 1) => {
  /* n has a default param of 1
  if the sequence is empty return an empty array
   */
  if (n === 0) {
    return []
  } else {
    /*
    slice() returns index 0 and 1st element in array
     */
    return arr.slice(0, n)
  }
}