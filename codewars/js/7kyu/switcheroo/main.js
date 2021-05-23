/*
r


Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.


data working with: strings
returns: string

example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

// map through the strings and switch a => b & b => a

*/


const switcheroo = x => {

  return x.split('').map(el => {
    if (el == 'b') {
      return 'a'
    } else if (el == 'a') {
      return 'b'
    } else if (el == 'c') {
      return 'c'
    }
  })
    .join('')
}