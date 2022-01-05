/* https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

P: string
R: S  T  R  I  N  G 
E: "Lets go to the movies" =>  
  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
Pseudocode: 
 -  change casing toUpperCase()
 - split string into an array
 - join array back into a string with two spaces
 - return string
 */

// code that works solves all codewars test cases
const vaporcode = (string) => string.toUpperCase().split(' ').join('').split('').join('  ')
