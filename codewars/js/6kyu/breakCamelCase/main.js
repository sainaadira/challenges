/*
https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

P: string (in camel case)
R: string camel cased separated
E: 'helloWorld' => 'hello World'
P: -create empty string to hold result
   -loop through the str with for..of 
   - check if there is an uppercased letter
   - if so, add a space to the new string
     followed by the letter
   - otherwise just add the letter to the string
   - return result
 */


const breakCamelCase = string => {
  let result = ''

  for (letter of string) {
    if (letter === letter.toUpperCase()) {
      result += ' '
      result += letter
    } else {
      result += letter
    }
  }
  return result
}
breakCamelCase('goodbyeWorld') // returns 'goodbye World'


const breakCamelCase = str => {
  return str.split("").map(letter => letter === letter.toUpperCase() ? " " + letter : letter).join("");
}