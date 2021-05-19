/* https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript

Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware. */


const parseF = s => {
  if (parseFloat(s) === 0) {
    return 0;
  }
  else {
    return parseFloat(s) || null
  }
}
