/*
https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"   --> "invalid string"

data working with: string
returns => array

pseudocode-
declare variable with an empty arr
loop through the string and grab the even indexes of all characters in a string
beginning from index 1
-- conditional--
if string is smaller than 2 characters OR longer than 100
return "invalid string"

*/

// first attempt with for loop
const evenChars = string => {
  if (string.length < 2 || string.length > 100) {
    return 'invalid string'
  }
  let arr = []
  for (let i = 1; i < string.length; i += 2) {
    arr.push(string[i])
  }
  return arr
}


/*
second attempt with filter
execute condtional first to check if string.length is less than 2 or greater than 100
then filter though string and check if the index is even
*/

const evenChars = string => {
  return (string.length < 2 || string.length > 100) ? 'invalid string' :
    [...string].filter((el, i) => i % 2)
}