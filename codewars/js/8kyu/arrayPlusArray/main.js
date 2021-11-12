/*https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. 

data working with: array (param)
returns: number

__pseudocode__
join the two arrays using spread operator
use reduce method to add the arraus and output one sum

*/

const arrayPlusArray = (arr1, arr2) => {
  let joinedArr = [...arr1, ...arr2]
  return joinedArr.reduce((a, b) => a + b, 0)
}

// reduced to a single line
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0)
