/*https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. 

data working with: array
returns: number

__pseudocode__
join the two arrays using spread operator
use reduce method to add the arraus and output one sum

*/

const arrayPlusArray = (arr1, arr2) => {
  return [...arr1, ...arr2].reduce((a, b) => a + b)
}


/* The concat() method is used to merge two or more arrays.
This method does not change the existing arrays, but instead returns a new array. -- MDN

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. -- MDN */
