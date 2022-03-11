/* https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1

P: number
R: number (reversed input number)
E: 123 => 321  || -456 => -654
P: convert number into a string, split, reverse + join it
   then convert back into a number with parseFloat()
  -- figure out how to preserve the sign with Math.sign()
  ** was not sure how to do this so i used this for guidance: src: freecodecamp
  Multiply it by the sign of the original number — to maintain the negative value.
   
*/

const reverseNumber = n => {
  let num = parseFloat(String(n).split('').reverse().join(''))
  return num * Math.sign(n)
}