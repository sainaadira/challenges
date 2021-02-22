/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// data working with: array

const mergedArrays = (...arrays) => {
  // create empty arr to store merged arrays 
  let mergedArr = []

  // looping through the arrays param and for each element in both arrays, add them into mergedArr
  arrays.forEach(arr => {
    mergedArr = [...mergedArr, ...arr]
  })
  // set object removes all elements that are not unique in an array
  // meaning all values in a set can only occur once
  return [...new Set([...mergedArr])]

}
mergedArrays([1, 2, 3, 4], [5, 6, 7, 1, 2])

//--------------------------------------------------------------
// solved using filter method!

const mergedArrays = (...arrays) => {
  let mergedArr = []

  arrays.forEach(arr => {
    mergedArr = [...mergedArr, ...arr]
  })
  // using filter() to remove duplicates from mergedArr
  let filteredArr = mergedArr.filter((item, el) => mergedArr.indexOf(item) == el)

  return filteredArr
}
mergedArrays([1, 2, 3, 4], [5, 6, 7, 1, 2])


module.exports = mergeArrays