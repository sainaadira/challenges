/*
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).


P: data working with/ string, string ending
R: returns boolean
Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

P: use endsWith() method to check if the input string ends with the ending string
endsWith returns a boolean
*/

const solution = (str, ending) => str.endsWith(ending)
