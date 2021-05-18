/* https://www.codewars.com/kata/get-character-from-ascii-value/train/javascript
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65) # => 'A' */



const getChar = c => {
  return String.fromCharCode(c)
}
