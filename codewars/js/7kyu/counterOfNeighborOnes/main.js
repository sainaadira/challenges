/* https://www.codewars.com/kata/56ec1e8492446a415e000b63/train/javascript

Task
Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

Example
[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []

P: [nums] * 1s and 0s
R: [counting continusous 1 only] if there are no 1s return []
E: [1, 1, 1, 0, 1] -> [3,1]
P: initalize counter and index at 0
   - counter to count number of times 1 appears
   - index to keep track of result array
   intalize empty array to hold result
   
   loop through my input array
   check if 1s appear continously 
    -- conditionally check if 0s exist
    if so, leave the count at 0
    set the index to equal what's inside result array

    -- condtionally check if 1s exist
   if so, add to the count
   set the index of result array to equal counter

   return the new array

 */

const onesCounter = input => {
  let result = []
  let counter = 0
  let index = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
      counter = 0
      index = result.length
    }
    if (input[i] === 1) {
      counter++
      result[index] = counter
    }
  }
  return counter
}