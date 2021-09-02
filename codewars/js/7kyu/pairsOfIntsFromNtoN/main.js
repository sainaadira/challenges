/* https://www.codewars.com/kata/588e2a1ad1140d31cb00008c

Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

Example:

m = 2
n = 4

result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]

P: numbers
R: [pairs from n to n]
E: 2 (starting) 4(ending) => [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]
P: create an empty array to hold result

*/

const generatePairs = (m, n) => {
  let result = []
  for (let i = m; i <= n; i++)
    for (let j = i; j <= n; j++)
      result.push([i, j])
  return result
}