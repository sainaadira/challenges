/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

//data working with: array => returns a number

const whereDoIBelong = (arr, num) => {
   // pushing the number into the array
   arr.push(num)
   // sort through the array in ascending order
   arr.sort((a, b) => a - b)
   // return the index of the newly pushed number
   return arr.indexOf(num)
}
console.log(whereDoIBelong([1, 2, 5, 6], 3))



module.exports = whereIBelong