/*
https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */

// data working with: strings/arrays
// returns string

const abbrevName = name => {
  // splitting string name into an array 
  let wholeName = name.split(' ')
  // [0][0] -- grabs the first element in array and uppercases it
  let firstInitial = wholeName[0][0].toUpperCase()
  //[1][0] -- grabs first element of 2nd word in array and uppercases it 
  // ex: ['sam' 'harris']
  // bc there are two words in the array i can access 'harris' as the 2nd element in my array (starting at index 1) and to grab the first element at index 0
  let lastInitial = wholeName[1][0].toUpperCase()
  return `${firstInitial}.${lastInitial}`
}


