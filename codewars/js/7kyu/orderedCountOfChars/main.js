/*
 https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

example
orderedCount("abracadabra")
[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

'hello'
[['h', 1], ['e', 1], ['l', 2] ['o', 1]]



//new Set to create a new array of unique chars
// map through the array and return an array with the element & text
// filter through array and check if the the letters are equal
// to get count, grab length

*/

const orderedCount = text => {
  return [...new Set([...text])].map(el => [el, [...text].filter(x => x === el).length])
}