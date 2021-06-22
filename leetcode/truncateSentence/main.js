/* https://leetcode.com/problems/truncate-sentence/

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

P: string, number
R: string
E: Input: s = "Hello how are you Contestant", k = 4
  Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
P: split string into an array
   create empty array for final result
   for loop to iterate through k
   push words into array
   return array
   join array back into a string
*/

const truncateSentence = (s, k) => {
  let words = s.split(' ')
  let arr = []
  for (let i = 0; i < k; i++) {
    arr.push(words[i])
  }
  return arr.join(' ')
}


// simplified solution
// split string into array
// slice at 0 and k (number)
// join() array back into a string
const truncateSentence = (s, k) => {
  return s.split(' ').slice(0, k).join(' ')
}