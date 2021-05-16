/*
https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

data working with: array
returns => array with index the vowels appear in a word

__pseudocode__
list all vowels store in arr
create empty arr to store final result
find the length of the word param
iterate through the word and find vowels
find index of vowel 
store into an arr

*/

const vowelIndices = word => {
  word = word.toLowerCase()
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let result = []

  for (let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) >= 0) {
      result.push(i + 1)
    }

  }
  console.log(result)

}