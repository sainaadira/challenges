/* https://www.codewars.com/kata/59cf805aaeb28438fe00001c/train/javascript

It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

Digits can be a number or a string, and you should control it is no undefined and return an empty string.

To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.


P: number OR string 
R: total (string)
E: '3433' => '3 + 4 + 3 + 3' = 13.
P: check if string is empty, if so return empty string
   convert digits into string
   split string into an array
   call reduce to grab total 
   create string to add + between each number
   return sum
*/

const sum = digits => {
  if (digits === '') return ''

  let sum = String(digits).split('').reduce((a, b) => a + +b, 0)
  let str = String(digits).split('').join(' + ')

  return `${str} = ${sum}`

}