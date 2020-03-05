/* https://www.codewars.com/kata/563c13853b07a8f17c000022/train/javascript

Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day. */


/* // first attempt
function isToday(date) {
     if (date === 'today'){
       return true
     }else{
     return false
     }
}
*/


// correct solution

function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}

/*
the date is the parameter
new Date() -- creates new date object

MDN -- toDateString()

The toDateString() method returns the date portion of a Date object in English in the following format separated by spaces:

First three letters of the week day name
First three letters of the month name
Two digit day of the month, padded on the left a zero if necessary
Four digit year (at least), padded on the left with zeros if necessary

and it needs to be equal in value + type to the date parameter.

 */
