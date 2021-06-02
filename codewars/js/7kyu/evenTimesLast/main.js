/*
https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.


P: array (of nums)
R: number (even indexed sum * last index)
E: [2,3,4,5] => 30
P: conditionally check if sequence is empty
   if yes, return 0
   create variable to hold sum
   traverse through arr find even indexes
   sum even indexes to get result
   mulitply sum by last index: numbers[numbers.length - 1]

 */

const evenLast = numbers => {
  // if the sequence is empty return 0
  if (numbers.length === 0) {
    return 0
  }
  //starting sum off with no value
  let sum = 0
  // loop through number sequence evenly
  for (let i = 0; i < numbers.length; i += 2) {
    //adding the sum of even numbers
    sum += numbers[i]
  }
  // multiplying sum of even numbers to last index in array
  return sum * numbers[numbers.length - 1]
}

