/*
https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces

P: string
R: array of strings (with even index capital)
E: 'abcd' => ['AbCd' , 'aBcD']
P: split my string param into an array
   create variable to hold both string values (even + odd)
   traverse though string with for loop 
   conditionally check if index are even: i % 2 ===0
   if they are, uppercase even index, leave odd lowercase vice versa
   return result 
   
   edge cases:
   non-empty str 
*/

function capitalize(s) {
  let arr = s.split('')
  let evenStr = ''
  let oddStr = ''

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenStr += arr[i].toUpperCase()
      oddStr += arr[i]
    } else {
      evenStr += arr[i]
      oddStr += arr[i].toUpperCase()
    }
  }
  return [evenStr, oddStr]
}
