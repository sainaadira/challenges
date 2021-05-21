/*https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39" */


const sumStr = (a, b) => {
  return `${Number(a) + Number(b)}`
}

// or store the numbers in variables and add them in template literals

const sumStr = (a, b) => {
  let num1 = Number(a)
  let num2 = Number(b)
  return `${num1 + num2}`
}
