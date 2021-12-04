/*
https://www.codewars.com/kata/57ed56657b45ef922300002b/train/javascript

The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.


data working with: string (param)
returns => string
example: 
broken("100010"), "011101")
broken("1"), "0")

__pseudocode__
  split the string into an array using split('')
  
  [how do i?
  find the index holding 1 and switch to 0
  find the index holding 0 and switch to 1]


  map through the array conditionally switch 1 to 0 & 0 to 1
  return to string using join('')
*/


const broken = x => {
  let str = x.split('')
  return str.map(el => {
    return el === '0' ? '1' : '0'
  })
    .join('')
}

//a one liner!
const broken = x => x.split('').map(el => el === '0' ? '1' : '0').join('')



// tried this solution again with a for loop
const broken = (x) => {
  let str = ''

  for (let i = 0; i < x.length; i++) {
    switch (x[i]) {
      case '0':
        str += '1'
        break;
      case '1':
        str += '0'
        break;
    }
  }
  return str
}