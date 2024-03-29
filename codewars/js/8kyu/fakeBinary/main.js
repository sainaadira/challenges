/*
https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

 -- split string into an array
 -- iterate through array with map
 -- conditionally check if numebr is greater or less than 5
 -- if less: return 0, if greater: return 1
 -- join back into string
 */


const fakeBin = x => x.split('').map(el => el < 5 ? 0 : 1).join('')
