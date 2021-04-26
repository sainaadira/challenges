/*
https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

data working with: strings/arrays
returns: string of numbers

*/


const highAndLow = numbers => {
  let nums = numbers.split(' ')
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}