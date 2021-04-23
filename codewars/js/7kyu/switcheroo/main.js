/*
https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript


Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.


data working with: strings
returns: string

example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

// map through the strings and switch a => b & b => a

*/


const switcheroo = x => {

  return x.split('').map((e) => {
    if (e == 'b') {
      return 'a'
    } else if (e == 'a') {
      return 'b'
    } else if (e == 'c') {
      return 'c'
    }
  }).join('')
}