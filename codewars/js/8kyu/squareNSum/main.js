/* https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

P: array of numbers
R: number (sum of all squared nums in arr)
E: [1, 2, 2]  =>  9
P: create empty arr to push reult into
   loop through numbers array
   square all numbers in array Math.pow() or ** 2
   push into array
   return arr 
   sum all numbers with reduce()
  
*/

const squareSum = numbers => {
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] ** 2)
  }
  return result.reduce((a, b) => a + b, 0)
}


squareSum([1, 2, 2])  // 9
