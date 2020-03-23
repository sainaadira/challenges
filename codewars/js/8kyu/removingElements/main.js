/*
https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that! */


function removeEveryOther(arr){

  return arr.filter((_, i) => i % 2 === 0)

  }
