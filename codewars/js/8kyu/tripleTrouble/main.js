/*
https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length. */


const tripleTrouble = (one, two, three) => {
  let string = ''

  for (let i = 0; i < one.length; i++) {
    string += `${one[i]}${two[i]}${three[i]}`
  }
  return string
}
