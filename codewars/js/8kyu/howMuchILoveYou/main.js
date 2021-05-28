/*https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all/train/javascript


Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}
Test.describe("howMuchILoveYou",function() {
    Test.it("Basic tests",function() {
        testing(howMuchILoveYou(7),"I love you")
        testing(howMuchILoveYou(3),"a lot")
        testing(howMuchILoveYou(6),"not at all")
})})
*/

const howMuchILoveYou = (nbPetals) => {
  let phrase = {
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly"
  }
  return phrase[nbPetals % 6]
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
