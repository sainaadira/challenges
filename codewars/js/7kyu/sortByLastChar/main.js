/*
https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

data working with: string
returns: array

__pseudocode__
 split string into array of words

use sort method sort through stringArr

grab the last element in the string from a and be params 

charCodeAt() - method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

params - index
An integer greater than or equal to 0 and less than the length of the string. If index is not a number, it defaults to 0.
SOURCE : MDN

 */


const last = x => {
  let strArr = x.split(' ')
  return strArr.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}