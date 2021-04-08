/*Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence.E.g

 searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")
 should return "He is Sitting on the couch" */

// data used: string
// methods used: slice() + replace() + toUpperCase()


const searchReplace = (str, word, newWord) => {
  // checks if the word matches the casing of the first letter in the of word (param) 
  if (word[0] === word[0].toUpperCase()) {
    // converts first letter of newWord to uppercase and appends to the the rest of the letters in newWord 
    newWord = newWord[0].toUpperCase() + newWord.slice(1)
  }
  // using replace method, on the sentence and pass the word with the replacement word
  return str.replace(word, newWord)
}

