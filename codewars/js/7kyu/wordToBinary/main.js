/* https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript

Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

P: string
R: array => binary from string
E: Example: 'man' should return [ '01101101', '01100001', '01101110' ]
P: create an empty array to hold result
   loop through string input
   push input string into array using charCodeAt()
   use toString() method to turn into a string pass in 2 as radix
   return the array
 */

const wordToBin = str => {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result.push(0 + str[i].charCodeAt().toString(2))
  }
  return result
}
