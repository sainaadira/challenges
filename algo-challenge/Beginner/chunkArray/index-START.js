/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


const chunkArray = (array, size) => {
    let combinedArr = array.concat(size)
    let filteredArr = combinedArr.filter((element, index) => {
        return combinedArr.indexOf(element) == index
    })
    return filteredArr
}
chunkArray([1, 2, 3, 4], [5, 6, 1, 2, 3])


module.exports = chunkArray