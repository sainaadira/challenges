/* https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript
Write a program that outputs the top n elements from a list.

Example:
largest(2, [7,6,5,4,3,2,1])
// => [6,7]

P: number, array
R: array containing largest elements from given input number
E:  largest(2, [7,6,5,4,3,2,1]) => [6,7]
    largest(3, [11, 12, 13, 1 ]) => [11, 12, 13]
P: i dont know the input number
   sort through the array in decending order
   extract the largest elements based on given input number .. slice()?
   because it will extract from 0th index to the given input number
   reverse all elements in array

*/

const largest = (n, arr) => arr.sort((b, a) => a - b).slice(0, n).reverse()


// refactored
/*
sort all elements in ascending order
extract largest elements from the length of the array 
minus the number given in input
*/

const largest = (n, arr) => arr.sort((a, b) => a - b).slice(arr.length - n)
