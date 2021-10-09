/*
https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.
 */

// my attempt
const multiTable = (number) => {
  let result = []
  for (let i = 1; i < 11; i++) {
    result.push(number * i)
  }
  return result.join('\n')
}

multiTable(5)
/* prints: 5
10
15
20
25
30
35
40
45
50
*/


// correct solution
const multiTable = (n) => {
  const table = []
  for (let i = 1; i <= 10; i++) {
    // here i needed to do a template string here, oops! but i see my mistake :)
    table.push(`${i} * ${n} = ${i * n}`)
  }
  return table.join('\n')
}
