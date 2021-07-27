/* https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

P: [nums]
R: number (sum of even nums in array)
E:  [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
    []                               -->  0
P:  filter through the array
   check for even number
   sum number with reduce
   return numbers
 */


const sumEvenNumbers = input => {
  let even = input.filter(el => el % 2 === 0)
  return even.reduce((a, b) => a + b, 0)
}



