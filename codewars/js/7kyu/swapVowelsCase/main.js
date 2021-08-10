/* https://www.codewars.com/kata/5803c0c6ab6c20a06f000026/train/javascript
Challenge:

Given a string, return a copy of the string with the vowels' case swapped.

For this kata, assume that vowels are in the set "aeouiAEOUI".

Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels.

P: string
R: string (vowel casing swapped)
E: 'the' -> 'thE' 
   'hello' -> 'hEllO'

P: name the vowels in a string
   split string into an array
   iterate through string - map
   condtionally change casing of vowels (function)
   join array back to string
   return

*/

const swapVowelCase = str => {
  const swapCase = l => l.toLowerCase() ? l.toUpperCase() : l.toLowerCase()

  return str.split('').map(el => 'aeiouAEIOU'.includes(el) ? swapCase(el) : el).join('')
}
