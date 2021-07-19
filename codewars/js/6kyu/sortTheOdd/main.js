/* https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

P: [nums] - only numbers, nothing unusual to consider
R: [odd, even] - odd nums in ascending order, even in og postion
E: [7, 1]  =>  [1, 7]
   [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
P: filter out odd numbers array in array
   sort all odd numbers in ascending order
   map through rest of array 
   conditionally check for even numbers
   if they are even, take odd array and move them to beginning
    return the arr
 */

const sortArray = array => {
   const odd = array.filter(el => el % 2 !== 0).sort((a, b) => a - b)
   return array.map(el => el % 2 ? odd.shift() : el)
}