/*

https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples
reverseList([1,2,3,4]) == [4,3,2,1]
reverseList([3,1,5,4]) == [4,5,1,3]

*/

const reverseList = list => {
  return list.reverse()
}

// reversing using a loop without reverse method
const listReverse = list => {
  let arr = []

  for (let i = list.length - 1; i >= 0; i--) {
    arr.push(list[i])
  }
  return arr
}