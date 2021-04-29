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
  let array = a.split(' ')
  let reply = []

  for (let i = 0; i < array.length; i++) {
    let words = (array[i].toUpperCase() + '!!!!').split('')
    for (let j = 0; j < words.length; j++) {
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
    reply.push(words.join(''))
  }
  return reply.join(' ')
}