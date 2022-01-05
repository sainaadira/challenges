/*
https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

P: string
R: string (a & b switched/ c in og postion)
E: 'acb' --> 'bca'
   'aabacbaa' --> 'bbabcabb'

Pseudocode:
 -create empty string for result
 - split input string into an array
 - iterate through string (for loop)
 - condtionally switch a -> b & b -> a *leave c alone
 - return result
 */

const switcheroo = str => {
  let result = ''
  let string = str.split('')

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
        result += 'b'
        break;
      case 'b':
        result += 'a'
        break;
      case 'c':
        result += 'c'
        break;
    }
  }
  return result
}

// with map()
const switcheroo = str => {
  return str.split('').map(el => {
    if (el === 'a') return 'b'
    if (el === 'b') return 'a'
    if (el === 'c') return 'c'
  }).join('')
}