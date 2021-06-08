/* https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

P: array of nums
R: array with sorted nums || []
E: [1, 2, 10, 50, 5] => [1,2,5,10,50]
P: make sure nums is not null or empty, if so.. return empty array
   sort numbers in ascending order with sort((a, b) => a - b, 0)

*/

const solution = nums => {
  return (nums || []).sort((a, b) => a - b, 0)
}