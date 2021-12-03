/*https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

P: string
R: string with cases changed
E: 'hELLO wORLD' => 'Hello World'
P: split string into an array
   iterate though string 
   conditionally check if 
   letter is lowercase => uppercase
   letter is uppercase => lowercase
   maybe iterate with map() to return a new array
  join string back together
     
 */

const alternateCase = s => s.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
