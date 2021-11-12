/*
https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]

data working with: arrays (param)
returns => an arr with all unique values

___pseudocode___
filter through the array to return a new one that contains:
an array with removed duplicates on the left side
search from the end of the array with lastIndexOf()

 MDN:
 The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

  method: filter(el, in, arr)
 check for all elements with duplicates

*/


const solve = arr => arr.filter((el, index, arr) => arr.lastIndexOf(el) === index)
