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
console.log(chunkArray([1, 2, 3, 4], [5, 6, 1, 2, 3]))



// this way worked but i didnt use any of the parameters
// function chunkArray(array, size) {
//     let arr1 = [1, 2, 3, 4, 5]
//     let arr2 = [5, 6, 7, 2]
//     let arr3 = [...arr1, ...arr2]
//     let filteredArr = arr3.filter((index, item) => arr3.indexOf(index) === item)
//     return filteredArr
// }
// console.log(chunkArray())



module.exports = chunkArray