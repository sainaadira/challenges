/* https://leetcode.com/problems/roman-to-integer/

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

P: string
R: number (roman converted to number)
E: Input: s = "III"
   Output: 3

   Input: s = "IV"
   Output: 4

P: if # on the right is greater than # on left (subtact) IV (5)
  if # on the left is greater than # on the right (add)  VI (6)
   - create map to hold all key/values
   - keep track of total starting at 0
   - loop over all chars in roman numeral (S) with for loop
   - capture current and next integer
   -check if current is greater or equal to next, if so add to current total
   - where next is greater than current, add total for both roman numerals
      -- iterate by one to move past 2 grabbed roman numerals
  - result then equals current number
  - return result

 */

const romanToInt = s => {
  // result to keep track of total
  let result = 0

  // roman map
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  // for loop to check all chars in roman numeral
  for (let i = 0; i < s.length; i++) {
    // gets first current character pass through roman map and gives integer it corresponds to
    let currentInteger = roman[s.charAt(i)]
    // gets next character pass through roman map and gives integer it corresponds to
    let nextInteger = roman[s.charAt(i + 1)]
    // checking to enure there is a next integer
    if (nextInteger) {
      // if current number is >= next ingeger
      if (currentInteger >= nextInteger) {
        // add current to the total result
        result += currentInteger
        // otherwise, total is equal to next - current integer
      } else {
        result += (nextInteger - currentInteger)
        // iterate by 1 to get the next set of roman numerals to compare
        i++
      }
      // othwewise result equals current integer
    } else {

      result += currentInteger
    }
  }
  return result
}