/* https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.


*/

// my first attempt

/* function correct(string){
	 if (string === 5){
    string.fromCharCode(83 + S )
   } else if (string === 0) {
     string.fromCharCode(79 + O)
   } else if(string === 1){
    string.fromCharCode(73 + I)

   } return string

}*/

// the correct solution
const correct = string =>
  string
    .split('')
    .map(char => {
      if (char === '5') return 'S'
      if (char === '0') return 'O'
      if (char === '1') return 'I'
      return char
    })
    .join('')



    /*
    -- i needed to split the string first in order to replace the numerical value with a letter
    -- i needed the map method to keep the original placement of the number so i could replace the 5,0,1
    -- using char returns a string created from the the specified utf-16 code units
    -- after splitting the string, mapping through and replacing the numbers => letters, join the string back together
    
       ** The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. */
