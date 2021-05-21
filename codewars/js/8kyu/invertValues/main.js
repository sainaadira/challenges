
/*
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

*/

const invert = array => {
  // create an empty array
  let arr = [];
  //loop through the array and obtain the length
  for (let i = 0; i < array.length; i++) {
    //push negative values into new array
    arr.push(-array[i]);
  }
  return arr;
}


// using map()
const invert = array => {
  return array.map(num => -num)
}
