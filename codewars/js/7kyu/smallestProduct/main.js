/* https://www.codewars.com/kata/5b6b128783d648c4c4000129/train/javascript

Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.


P: [[integers]]
R: number (smallest total from multiplied contents of array)
E: input = [
  [1, 5],
  [2],
  [-1, -3]
].          result = 2
  
P: create empty array for result
   loop through array (for loop)
   multiply elements in array ( reduce() )
   push into result array
   to find smallest product, Math.min()
   pass in the result
   return result
 */

const smallestProduct = arr => {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].reduce((a, b) => a * b))
  }
  return Math.min(...result)
}

/*
 to grab the minimum total, use Math.min()
 pass in the input array
 iterate through array using - map()
 to grab total product, use reduce()
 return array
 */
const smallestProduct = arr => {
  return Math.min(...arr.map(el => el.reduce((a, b) => a * b)))
}
