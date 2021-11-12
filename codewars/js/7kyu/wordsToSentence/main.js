/*https://www.codewars.com/kata/57a06005cf1fa5fbd5000216/train/javascript
Write function which will create a string from a list of strings, separated by space.

Example:

["hello", "world"] -> "hello world"

P: ['string', 'text']
R: 'string'
E: ["hello", "world"] -> "hello world"
P: because i have an array, i can join the array into a string.
 - wasn't sure how to remove the comma but it gets removed in the join method

 */

const wordsToSentence = words => words.join(' ')


// this can also be done with reduce

const wordsToSentence2 = words => words.reduce((prev, acc) => prev + ' ' + acc)
