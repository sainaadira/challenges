/* https://www.codewars.com/kata/5a7778790136a132a00000c1/train/javascript

The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.

n will be an integer such that 0 < n < 10⁹
If the passed integer is already a single digit there is no need to reduce
For example given 5665 the function should return 5:

5665 --> (binary) 1011000100001
1011000100001 --> (sum of binary digits) 5
Given 123456789 the function should return 1:

123456789 --> (binary) 111010110111100110100010101
111010110111100110100010101 --> (sum of binary digits) 16
16 --> (binary) 10000
10000 --> (sum of binary digits) 1

P: n = ingeger
R: number
E: n = 5665 => binary: 1011000100001  => 5
P: - create a function to convert n to binary
   - create a function to convert n to a string => array then map through array to convert n to numbers
   - create function to use the array of numbers and sum the binary digits
   - conditionally check while number is less than 9:
     repeat the process

 */


/*
my first attempt

function singleDigit(n) {
const toBinary = num => num.toString(2)
let converted = [...toBinary(n)].map(el => Number(el))
 
  return converted.reduce((a, b) => a + b, 0)
}
*/


const numToBinary = num => num.toString(2)

const numToDigits = num => String(num).split('').map(el => Number(el))

const sumBinaryDigits = num => numToDigits(num).reduce((acc, cv) => acc + cv, 0)

const singleDigit = num => {

  while (num > 9) {
    num = sumBinaryDigits(numToBinary(n))
  }
  return num
}
