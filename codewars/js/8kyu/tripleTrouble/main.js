/*
https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

Note: You can expect all of the inputs to be the same length.

data working with: strings (param)
returns => string

example:
Input: "aa", "bb" , "cc" => Output: "abcabc"

___pseudocode___
- create empty string to store input
- loop through first param
- use template literal for string interpolation adding variables and all
     elements from the input
- add them to string and return

*/


const tripleTrouble = (one, two, three) => {
  let str = ''

  for (let i = 0; i < one.length; i++) {
    str += `${one[i]}${two[i]}${three[i]}`
  }
  return str
}
