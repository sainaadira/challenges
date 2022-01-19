/* https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

data working with: numbers + arrays
returns: array

__pseudocode__
create an empty array to store final result
turn n (number) into a string
split() - turns string into an arr of strings
reverse() the order of the strings

loop through num and push into arr
convert strings back into a number with Number obj
*/

const digitize = n => {
  let num = `${n}`.split('').reverse()

  let arr = []
  for (let i = 0; i < num.length; i++) {
    arr.push(Number(num[i]))
  }
  return arr
}

// using map method
const digitize = n => String(n).split('').map(Number).reverse()
