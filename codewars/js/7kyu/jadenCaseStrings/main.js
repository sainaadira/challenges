/*
https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

P: string
R: string with every first letter uppercased
E: "How can mirrors be real if our eyes aren't real" =>  "How Can Mirrors Be Real If Our Eyes Aren't Real"
P: create empty string to hold result
   split my word into an array of words
   loop through sentence array 
   concatenate result to = all first letters of word capitalized and rest of letters stay as they are
   return result and remove extra space using trim

*/

String.prototype.toJadenCase = function () {
  let result = ''
  const sentence = String(this).split(' ')

  for (let i = 0; i < sentence.length; i++) {
    result += sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1) + ' '
  }
  return result.trim()
}


//

String.prototype.toJadenCase = function () {
  return String(this).split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
}