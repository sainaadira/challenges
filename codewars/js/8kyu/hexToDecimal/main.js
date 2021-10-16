/* https://www.codewars.com/kata/57a4d500e298a7952100035d/train/javascript

source: https://javascript.plainenglish.io/javascript-algorithm-hex-to-decimal-3400f3742d1e

Complete the function which converts hex number (given as a string) to a decimal number.

p: string
r: decimal number
e: "a" => 10
p: convert string to number with parseInt
   pass in hexString and 16 for conversion
 */

const hexToDec = hexString => parseInt(hexString, 16)