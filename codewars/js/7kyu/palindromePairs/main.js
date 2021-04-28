/*
https://www.codewars.com/kata/5772ded6914da62b4b0000f8/train/javascript
Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

data working with: strings/arrays

examples:
["bat", "tab", "cat"] # [[0, 1], [1, 0]]
["dog", "cow", "tap", "god", "pat"] # [[0, 3], [2, 4], [3, 0], [4, 2]]
["abcd", "dcba", "lls", "s", "sssll"] # [[0, 1], [1, 0], [2, 4], [3, 2]]

*/



const palindromePairs = words => {
  // empty array to push pairs into
  const pairs = []
  //loop through  words initalized with i
  for (let i = 0; i < words.length; i++) {
    // loop through words initalized with j
    for (let j = 0; j < words.length; j++) {
      //conditional for if i does not equal j
      if (i !== j) {
        // words spelled forward get assigned here
        let forwards = `${words[i]}${words[j]}`
        // palindrome words assigned here
        let backwards = [...forwards].reverse().join('')
        // if words are the same forward and backward
        if (forwards === backwards) {
          // push them into pairs array
          pairs.push([i, j])
        }
      }
    }
  }
  // return value of pairs
  return pairs
}