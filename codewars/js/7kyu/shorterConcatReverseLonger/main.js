/* https://www.codewars.com/kata/54557d61126a00423b000a45/train/javascript

Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

P: 2 strings (a, b)
R: shorter + reverse(longer) + shorter
E: 'hello', 'bau' => 'bauollehbau'
    'first', 'abcde' 'abcdersrifabcde'
    if same length: b + reverse(a) + b
    if a is longerL a + reverse(b) + a
P: grab length of both a and b
  create a reverse function for string
  check if a is less than b
  if so return a + reverseFunction(b) + a
  otherwise return b + reverseFunction(a) + b

*/
// b should be original long string  a + reverse(b) + a
// if a === b, a is longer => b + reverse(a) + b
const shorter_reverse_longer = (a, b) => {
  const reverse = (string) => string.split('').reverse().join('')

  if (a.length < b.length) {
    return a + reverse(b) + a
  }
  return b + reverse(a) + b
}