/*https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */

function abbrevName(name){
  name.toUpperCase()
  let arr = name.split(' ')
  return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`
  // got help with this line but i am getting the capital letters with the period here
}
