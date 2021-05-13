/*
https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript

Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"

data working with : array
returns: array

__pseudocode__
loop though the length of arr (x)
conditionally check:
if any of the elements = 'O' return the index
otherwise, return 'None available!'

*/

const meeting = x => {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'O') return i
  }
  return 'None available!'
}



