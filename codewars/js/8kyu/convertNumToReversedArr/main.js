/* https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]


data working with: numbers + arrays
returns: array

to split and reverse: turn x into a string

*/

const digitize = n => {
  n = `${n}.`.split('').reverse()
  let newArr = []

  for (let i = 0; i < n.length; i++) {
    newArr.push(+ n[i])
  }
  return newArr
}

