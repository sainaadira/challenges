/*
https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

data working with: array
returns: string

/*
P: array of numbers
R: string: odd or even
E: oddOrEven([0]), 'even'
   oddOrEven([1]), 'odd'
P: create variable to to store sum
   sum all elements in array
  check for i % 2 === 0 if so, 'even'
  otherwise its: 'odd'

  edge case:
  if empty array [0] = > even
  neg/ pos does not matter

*/

// with ternary operator
const oddOrEven = array => {
  let sum = array.reduce((a, b) => a + b, 0)
  return sum % 2 === 0 ? 'even' : 'odd'
}