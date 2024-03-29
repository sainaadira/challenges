/*
https://www.codewars.com/kata/53a8a476947277a3020001cc/train/javascript

Write a function that appends the items from sequence 2 onto sequence 1, returning the newly formed sequence. Your function should also be able to handle nested sequences.

All inputs will be arrays/nested arrays.

For example:

['a','b','c'], [1,2,3]     --> ['a','b','c',1,2,3]
[['x','x'],'B'], ['c','D'] --> [['x','x'],'B','c','D']

data working with: arrays
return => array
*/
const appendArrays = (arr1, arr2) => [...arr1, ...arr2]