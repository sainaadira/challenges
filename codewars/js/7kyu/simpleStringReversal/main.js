/* https://www.codewars.com/kata/5a71939d373c2e634200008e/train/javascript

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo".
-- However, there is a space after the first three characters, hence "edo cruo"

solve("your code rocks") = "skco redo cruoy"
solve("codewars") = "srawedoc" */


function solve(str){
  // an array where the strings are split
  let arr = str.split('')
  //  an empty array to push new words into
  let blank = []
  // loop through the arr and obtain the length
  for(let i = 0; i < arr.length; i++){
    // if the words in the array contain spaces push them into the empty array
    if(arr[i]=== ' ')
      blank.push(i)
    }

  let noSpaces = arr.join('').split(' ').join('')
  let reverseArr = noSpaces.split('').reverse()
  for(let j = 0; j < blank.length; j++){
    reverseArr.splice(blank[j], 0, ' ')
  }
  return reverseArr.join('')
}
