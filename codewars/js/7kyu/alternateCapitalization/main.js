/*https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */


function capitalize(s) { //declaring function capitalize expecting one argument
    let str = ''; //declaring str as an empty string
    let altString = ''; //declaring altString as an empty string
    for (let i = 0; i < s.length; i++) { //for loop iterating over length of argument
        if (i % 2 === 0) { //conditional executing if 0 or an even index
            str += s[i].toUpperCase(); //transforming letter at current index to upper case and adds to str
        } else { //conditional executing if other than an even index
            str += s[i]; //adds current index to str
        }
    } //end of for loop
    for (let i = 0; i < s.length; i++) { //for loop iterating over length of argument
        if (i % 2 === 1) { //conditonal executing if current index is odd
            altString += s[i].toUpperCase(); //transforms current index to upper case and adds to altString
        } else { //conditional executing if other than odd index
            altString += s[i]; //adds current index to altString
        }
    } //end of for loop
    return [str, altString]; //returns an array with str and altString
};
