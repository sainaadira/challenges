/* https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript

In this kata, your job is to return the two distinct highest values in a list. If there are less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

P: [nums]
R: [highest, lowest] (value)
E: [4, 10, 10, 9]  =>  [10, 9]
P: copy the array using new Set()
   sort the array in desencing order (b - a)
   use slice to get the first two elements and return a new array
*/

const twoHighest = arr => [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)