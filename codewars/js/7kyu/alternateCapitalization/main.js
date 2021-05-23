/*https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! 

data working with: string, array
param: string
returns => array

___pseudocode____
create 2 empty strings for even and odd indexed alternating cases
loop through the 's' param for both strings
in the first loop check for the even indexes and make them uppercase
otherwise leave the letters lowercase

in the second loop check for the odd indexes and make them uppercase
otherwise leave the letters in lowercase 

return both strings wih  even/odd indexed alternated cases

*/

const capitalize = s => { //declaring function capitalize expecting one argument
  let str = '' //declaring str as an empty string
  let altString = '' //declaring altString as an empty string
  for (let i = 0; i < s.length; i++) { //for loop iterating over length of argument
    if (i % 2 === 0) { //conditional executing if 0 or an even index
      str += s[i].toUpperCase() //transforming letter at current index to upper case and adds to str
    } else { //conditional executing if other than an even index
      str += s[i] //adds current index to str
    }
  } //end of for loop
  for (let i = 0; i < s.length; i++) { //for loop iterating over length of argument
    if (i % 2 === 1) { //conditonal executing if current index is odd
      altString += s[i].toUpperCase() //transforms current index to upper case and adds to altString
    } else { //conditional executing if other than odd index
      altString += s[i] //adds current index to altString
    }
  } //end of for loop
  return [str, altString] //returns an array with str and altString
}


// without comments

/* const capitalize = s =>{
  let str = ''
  let altStr = ''

  for(let i = 0; i < s.length; i++){
    if(i % 2 === 0){
      str += s[i].toUpperCase()
    }else{
      str += s[i]
    }
  }
  for(i = 0; i < s.length; i++){
    if(i % 2 === 1){
      altStr += s[i].toUpperCase()
    }else{
      altStr += s[i]
    }
  }
     return [str, altStr]
}
}
*/

// refactored code with one for loop
const capitalize = s => {
  const arr = s.split('')
  let str = '', altStr = ''

  for (let i = 0; i < arr.length; i++) {
    // checks to see if the index is even and if so make the altStr uppercase and leave the first string index as is.
    if (i % 2) {
      str += arr[i]
      altStr += arr[i].toUpperCase()
    } else {
      str += arr[i].toUpperCase()
      altStr += arr[i]
    }

  }
  return [str, altStr]

}

// O(n) time complexpity because the iteration is the the size of s