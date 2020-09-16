/* https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples. */

/*pseudocode
create an empty array for the final result
loop through the array and get each element in the array
create an empty string for the final result
create second loop to and obtain characters in the string
if there are no repeated characters in the string push the newelement into array
*/


function dup(s) {
  let newResult=[]
  for(let i=0; i<s.length;i++){
    let string=s[i];
    let newElement=''

    for(let j=0; j<string.length;j++){
      if(string[j]!=string[j+1]){
        newElement+=string[j];
      }
    }

    newResult.push(newElement)
  }

  return newResult;
};
