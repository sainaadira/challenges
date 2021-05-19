/*https://www.codewars.com/kata/what-is-between/train/javascript

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

data working with: array
return => array with intergers between the a, b params

___pseudocode___
create am empty arr to store final result
loop through arr where i = a and b is less than or equal to b
push into a new arr
return arr
*/


const between = (a, b) => {
  let arr = []
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }
  return arr
}
