/*
https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]

data working with: arrays (param)
returns => an arr with all unique values

___pseudocode___
 go through arr and filter out the 1st el that is a duplicate
 method: filter(el, in, arr) 
 check for all elements with duplicates 
 method: lastIndexOf()
 MDN:
 The lastIndexOf(param: searchEl) 
 lastIndexOf compares searchElement to elements of the Array using strict equality (the same method used by the ===, or triple-equals, operator)

*/


const solve = arr => {
  return arr.filter((el, index, arr) => arr.lastIndexOf(el) === index)
}