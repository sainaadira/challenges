/*Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are(in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

data working with: strings
returns: string with moved vowels to end of string

  Examples:
"day" ==> "dya"
"apple" ==> "pplae"
*/

const moveVowel = (input) => {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  let arr = input.split('');
  let consonant = arr.filter(el => !vowelsArr.includes(el)).join('');
  let vowel = arr.filter(el => vowelsArr.includes(el)).join('');
  return consonant + vowel;
}

