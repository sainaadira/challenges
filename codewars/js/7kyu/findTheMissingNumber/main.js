/* https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/javascript

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

p: [nums]
r: mising number from array
e: [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16] => 26
p: sort through my array
   loop through to 100 and check if element is included in sorted array
   if not, return element
 */

const missingNo = nums => {
  let sorted = nums.sort((a, b) => a - b)
  for (let i = 0; i <= 100; i++) {
    if (!sorted.includes(i)) {
      return i
    }
  }
}