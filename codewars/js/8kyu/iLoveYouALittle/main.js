/*
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

data working with: array
returns:string
*/

const howMuchILoveYou = nbPetals => {
  let lovePhrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all'
  ]
  return lovePhrases[(nbPetals - 1) % 6]
}


// with switch case
const howMuchILoveYou = nbPetals => {
  let answer = nbPetals % 6;
  switch (answer) {
    case 1:
      return 'I love you';
    case 2:
      return 'a little';
    case 3:
      return 'a lot';
    case 4:
      return 'passionately';
    case 5:
      return 'madly';
    default:
      return 'not at all';
  }
}