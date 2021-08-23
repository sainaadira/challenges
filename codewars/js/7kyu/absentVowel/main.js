/*
https://www.codewars.com/kata/56414fdc6488ee99db00002c
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

data working with: array
returns: number

exampples:
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

***** PSEUDO CODE ****
1) store vowels into an array
2) search for the index of which the vowel is missing with findIndex()
3) check to see if the string does not contain vowel within a given index


MDN SOURCES
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function
The includes() method determines whether an array includes a certain value among its entries, returrns boolean as appropriate.
*/

/* with spread operator */
const absentVowel = x => {
  return [...'aeiou'].findIndex(vowel => !x.includes(vowel))
}