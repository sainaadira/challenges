/*
https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript

In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

data working with: strings
returns: string

*/



const calculate = str => {
  return str
    // adding string:plus into str and converting to an arr 
    .split('plus')
    // joins string by converting arr back into a string
    .join(' ')
    // adding string:minus to str
    .split('minus')
    // join string together with subtraction operator
    .join(' -')
    // split string to perform addition and subtraction operands
    .split(' ')
    /* reduce method takes two args: callback function + initalizer--
     cb: provides a callback function for each element in my array
     total represents the sum or difference of each number in my array 
     ex: const addArr= [1,2,3] each element gets added or subtracted and that becomes the value of total. the return value is total + current value of num. 
     in: inital value for the accumlator(num)
     */
    .reduce((total, num) => total + Number(num), 0)
    //method for string conversion
    .toString();
}