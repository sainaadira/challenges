/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

// data working with: number
// create variable to store first and second value
// variable to store the current val to the previous one
// loop through the numbers while n is greater than/equal to 0


const fibonacci = (n) => {
    let firstVal = 1, secondVal = 2, tempSum;
    while (n >= 0) {
        tempSum = firstVal
        firstVal = firstVal + secondVal
        secondVal = tempSum
        n--
    }
    return secondVal
}

fibonacci(4)

module.exports = fibonacci