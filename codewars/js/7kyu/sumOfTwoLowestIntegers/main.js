/*https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

p: [pos integers]
r: sum of two smallest nums
e: [10, 343445353, 3453445, 3453545353453] => 3453455
p: sort the array in ascending order
   slice the first two elements in the arr
   the add them together 

 */

const sumTwoSmallestNumbers = numbers => {
  const sortedArr = numbers.sort((a, b) => a - b).slice(0, 2)
  return sortedArr[0] + sortedArr[1]
}