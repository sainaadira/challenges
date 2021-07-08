/*
https://www.codewars.com/kata/5849169a6512c5964000016e/train/javascript

Write a function that returns the greatest common factor of an array of positive integers. Your return value should be a number, you will only receive positive integers.

greatestCommonFactor([46, 14, 20, 88]); // --> 2

P: [+nums]
R: +number (gcf of array)
E: [46, 14, 20, 88]  =>  2
P: keeping it 100, i havent touched prime #s and gcf since high school so i had to refresh and understand, but now that i'm caught up.. i tried to write out how to solve this problem by using the steps i learned regarding finding the gcd.. only to realize there is just a recursive algorithm (euclidean) out there for figuring it out (nice to know, no need to memorize though) it can be written:

const gcd = (x, y) => (!y) ? x : gcd(y, (x % y))

 or

   const gcf = (a, b) =>{
    if (b === 0) return a;
    return gcf(b, a % b);
  }

a, b x,y are arbitrary letters in the parameter but 
 a = lg #,  b = sm #

 pass that into the reduce function to produce a single value 
*/


const greatestCommonFactor = array => {
  const gcf = (a, b) => {
    if (!b) return a
    return gcf(b, (a % b))
  }
  return array.reduce(gcf)
}