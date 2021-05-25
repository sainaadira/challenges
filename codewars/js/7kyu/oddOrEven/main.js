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

*/

const oddOrEven = array => {
  // adding all the values in the array with an initial value of 0
  let sum = array.reduce((a, b) => a + b, 0)
  //conditional to check if sum  is equal to 0 => even
  // or if the sum is divisible by 2 with no remainder => even
  // otherwise return odd
  if (sum === 0) {
    return 'even'
  } else if (sum % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

// with ternary operator
const oddOrEven = array => {
  let sum = array.reduce((a, b) => a + b, 0)
  return sum % 2 === 0 ? 'even' : 'odd'
}