/* https://www.codewars.com/kata/583ade15666df5a64e000058/train/javascript

This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.

P: number
R: string (binary of even, hex if odd)
E:  even: 2 => '10'
    odd: 13 => 'd'
P: check for even number
   if even: .toString(2) -binary
  if odd : .toString(16) - hexideximal
*/

const evensAndOdds = num => {
  return num % 2 === 0 ? num.toString(2) : num.toString(16)
}