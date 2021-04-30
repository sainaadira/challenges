/*
https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript

Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

data working with: strings / arrays
returns: string

*/

const gordon = a => {
  // splitting string into arr of text
  let array = a.split(' ')
  // emply array for final reply
  let reply = []
  // loop through length of array
  for (let i = 0; i < array.length; i++) {
    // converting words from array to uppercase and concatenating '!!!!' at the end of each word.
    let words = (array[i].toUpperCase() + '!!!!').split('')
    // second loop to loop through array of newly convertd words
    for (let j = 0; j < words.length; j++) {
      // switch statement if word has an A change it to @ 
      // if word contains rest of the vowels change to *
      switch (words[j]) {
        case 'A':
          words[j] = '@'
          break;
        case 'E':
        case 'I':
        case 'O':
        case 'U':
          words[j] = '*'
          break;
      }
    }
    // converting words back into a string and pushing into reply array
    reply.push(words.join(''))
  }
  // return the reply array converted back into a string
  return reply.join(' ')
}