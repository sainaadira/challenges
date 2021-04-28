/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

const capSentence = (text) => {
  let capSen = []
  let sentence = text.toUpperCase().split(' ')

  for (let i = 0; i < sentence.length; i++) {
    let firstLetter = sentence[i].charAt(0)
    let restOfWord = sentence[i].slice(1).toLowerCase()
    let newSentence = firstLetter + restOfWord
    capSen.push(newSentence)
  }
  return capSen.join(' ')



}

console.log(capSentence('Just a test'))

module.exports = capSentence