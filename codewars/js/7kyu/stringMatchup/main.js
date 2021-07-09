/* https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript
Given two arrays of strings, return the number of times each string of the second array appears in the first array.

P: [ 'strings' ]
R: number => of times each string in 2nd arr appears in 1st
E: array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
   array2 = ['abc', 'cde', 'uap']  => [2, 1, 0]

  array1 = ['abc', 'xyz','abc', 'xyz','cde']
  array2 = ['abc', 'cde', 'xyz'] =>  [2, 1, 2]

P:  map through arr 2 to return a new array
   filter through arr1 and check if elements in arr 2 === elements in array 1
   grab the length

*/

const stringMatchup = (arr1, arr2) => {
  return arr2.map(a => arr1.filter(b => a === b).length)
}