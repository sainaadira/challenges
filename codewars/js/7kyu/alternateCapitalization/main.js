/*https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! 

data working with: string, array
param: string
returns => array



*/


// refactored code with one for loop
const capitalize = s => {
  const arr = s.split('')
  let str = '', altStr = ''

  for (let i = 0; i < arr.length; i++) {
    // checks to see if the index is even and if so make the altStr uppercase and leave the first string index as is.
    if (i % 2) {
      str += arr[i]
      altStr += arr[i].toUpperCase()
    } else {
      str += arr[i].toUpperCase()
      altStr += arr[i]
    }
  }
  return [str, altStr]
}
