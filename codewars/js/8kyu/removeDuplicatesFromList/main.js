/* https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
 */


const distinct = arr => [... new Set(arr)]

// using  hash map
const distinct = arr => {
  let map = {}
  return arr.filter(el => map.hasOwnProperty(el) ? false : (map[el] = true))
}