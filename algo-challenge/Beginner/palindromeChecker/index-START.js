/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

// data working with: string => returns boolean


const palindromeChecker = (text) => {
    let backwardStr = text.toLowerCase().split('').reverse().join('')
    return backwardStr === text
}

console.log(palindromeChecker('racecar'))



module.exports = palindromeChecker;