/*https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/train/javascript


Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).



my first attempt. i was really close but my syntax was off.. */

// function validateUsr(username) {
//   res =  /^[a-z][0-9] [_]{4,16}/.test(username)
//   return res
// }


correct solution

function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}
