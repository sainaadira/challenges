/*  https://www.codewars.com/kata/love-vs-friendship/train/javascript

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.*/


function wordsToMarks(string) {
  placing any number before the alphabet to get a numberic value for each letter.
  let letterVal = "7abcdefghijklmnopqrstuvwxyz";
  let finalString = 0;
  for (let i = 0; i < string.length; i++) {
    // The indexOf() method returns the position of the first occurrence of a specified value in a string
    finalString += letterVal.indexOf(string[i]);
  }
  return finalString;
}
