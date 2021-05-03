/*
codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

Simple, remove the spaces from the string, then return the resultant string.

data working with: array
returns: string

*/

const noSpace = x => {
  let str = x.split(' ').join('')
  return str
}