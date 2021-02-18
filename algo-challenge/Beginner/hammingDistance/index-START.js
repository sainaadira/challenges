/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/



// The hamming distance between two strings of equal length is the number of positions at which these strings vary. In more technical terms, it is a measure of the minimum number of changes required to turn one string into another. // 


// data working with: strings =>  returns a number

// create variable to store index pos of different character in 2 strings
// check if the strings are of equal length before comparing
// loop through the strings 
// check if the values of the string are the same make sure they're both in the same casing
// if they are, cool. if not, return the index postion of where the difference lies


const hammingDistance = (stringA, stringB) => {
    let indexPosition = 0

    if (stringA.length === stringB.length) {
        for (let i = 0; i < stringA.length; i++) {
            if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
                indexPosition++
            }
        }
    }
    return indexPosition
}

hammingDistance('lover', 'liver')

module.exports = hammingDistance