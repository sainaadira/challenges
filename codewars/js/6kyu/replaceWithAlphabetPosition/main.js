/* https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

P: string of text
R: string of nums that represent each letter in text
E: "The sunset sets at twelve o' clock. 
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

pseudocode:
-create empty arr for result to contain answer
-split string into arr 
-mapping letter to number (create obj {letter: number})
-loop through the text array that has all letters split
-checking to see if the map contains letter that holds all chars
- if letter is not one of keys in obj, it's not a letter, it's a random char, space (dont return)
- pushing the number that is associated with the val of that letter
- join array back to str
 */

const alphabetPosition = text => {
  let charArr = text.toLowerCase().split('')
  let result = []

  let alphabetObject = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'm': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
  }

  for (let i = 0; i < charArr.length; i++) {
    if (alphabetObject.hasOwnProperty(charArr[i])) {
      result.push(alphabetObject[charArr[i]])
    }
  }
  return result.join(' ')
}
