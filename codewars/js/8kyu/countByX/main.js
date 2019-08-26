// https://www.codewars.com/kata/count-by-x/train/javascript

/* Create a function with two arguments that will return a list of length(n) with multiples of(x).
*  Assume both the given number and the number of times to count will be positive numbers greater than 0.
*  Return the results as an array(or list in Python, Haskell or Elixir).
* Example
 * arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * arr2 = [2, 4, 6, 8, 10]
*/


function countBy(x, n) {
    var z = [];
    // looping through numbers and and increment by 1
    for (i = 1; i <= n; i++) {
        z.push(i * x);
    }
    return z;
    
}
console.log(countBy(3, 6)) 


