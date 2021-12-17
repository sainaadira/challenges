/* https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?"
"No?" --> "No?"

P: string
R: string with question mark at end (if it doesnt already end in one)
E: 'Yes' => 'Yes?'  || 'No'  => 'No?'
P: check to see if the string already contains a question mark
   if it does, return original string
   if not, concatenate a question mark to the end of string
*/

const ensureQuestions = s => {
  if (s.endsWith('?')) return s
  return `${s}?`
}

// a one liner
const ensureQuestions = s => s.endsWith('?') ? s : `${s}?`
