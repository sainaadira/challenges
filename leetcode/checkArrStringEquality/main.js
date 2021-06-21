/* https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

P: array of strings
R: boolean
E: word1 = ["ab", "c"], word2 = ["a", "bc"] => true
   word1 = ["a", "cb"], word2 = ["ab", "c"] => false
P: all letters are lowercase so no need to check
   join word 1 & word 2 .join('')
   compare using strict equals 

*/

const arrayStringsAreEqual = (word1, word2) => {
  return word1.join('') === word2.join('')

}
arrayStringsAreEqual(['ab', 'd'], ['a', 'c', 'd'])