/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/


const fizzBuzz = (n) => {
    for (let n = 1; n <= 100; n++) {
        if (n % 15 === 0) {
            console.log('FizzBuzz')
        } else if (n % 3 === 0) {
            console.log('Fizz')
        } else if (n % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(n)
        }
    }
}

fizzBuzz()

module.exports = fizzBuzz