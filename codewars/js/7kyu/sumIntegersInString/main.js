/* https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript


Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

P: string
R: number (sum of nums in string)
E: ['C4t5 are 4m4z1ng.', 18]
P: create empty array for numbers
   create empty string
   iterate though string input (for loop)
   check to see if numbers exist in string
   - if so, add to empty empty string
   - otherwise push numbers to numbers array
   map through num array and convert all string numbers to a number
   to get single value, call reduce() 
   return value

*/

const sumIntegers = str => {
  let numArr = []
  let temp = ''

  for (let i = 0; i <= str.length; i++) {
    if (Number.isInteger(Number(str[i]))) {
      temp += str[i]
    } else {
      numArr.push(temp)
      temp = ''
    }
  }
  return numArr.map(num => Number(num)).reduce((acc, num) => acc + num)
}
