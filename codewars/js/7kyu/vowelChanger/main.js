/* https://www.codewars.com/kata/597754ba62f8a19c98000030/train/javascript

Create a function that changes all the vowels (excluding y) in a string, and changes them all to the same vowel. The first parameter of the function is the string, and the second is the vowel that all the vowels in the string are being changed to.



P: string (all lowercase) vowel (letter to replace all other vowels)
R: string with single vowel (vow) to replace all other vowels
E: 'adira wants to go to the park', 'o') =>'odoro wonts to go to tho pork'
P: name the vowels in a map {'a', vow, 'e': vow ...}
   split the str into an arr
   map through stringArray
   use vowel to replace og string => vowelMap[el]
   return stringArr into string with join('')

*/

const vowelChange = (str, vow) => {
  let vowelMap = { 'a': vow, 'e': vow, 'i': vow, 'o': vow, 'u': vow }
  return str.split('').map(el => vowelMap[el] || el).join('')
}