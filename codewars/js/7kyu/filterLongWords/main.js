/*https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript
Write a function filterLongWords that takes a string sentence and an integer n.

Return a list of all words that are longer than n.

P: text, interger
R: array 
E: "The quick brown fox jumps over the lazy dog", 4) =  ['quick', 'brown', 'jumps']
P: split string into an array
   filter through array and check for the length words longer than n

*/

const filterLongWords = (sentence, n) => {
  return sentence.split(' ').filter(el => el.length > n)
}