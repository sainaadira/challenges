/*
https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

P: string
R: string with every first letter uppercased
E: "How can mirrors be real if our eyes aren't real" =>  "How Can Mirrors Be Real If Our Eyes Aren't Real"
P: split the string into an array
   map through the array and grab the first letter of every word using charAt() and make uppercase and slice at first index to leave the rest of the letters lowercase
   join the array back into a string
   return array

*/

String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
};