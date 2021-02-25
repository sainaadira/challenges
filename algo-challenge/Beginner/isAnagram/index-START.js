/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams of each other. Return true if the pass the test and false if they don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

//data working with: strings  => returns boolean

const isAnagram = (stringA, stringB) => {
    const compareStr = (str) => {
        return str.toLowerCase().split('').sort().join('')
    }
    return compareStr(stringA) === compareStr(stringB)
}

console.log(isAnagram('listen', 'silent'))


module.exports = isAnagram