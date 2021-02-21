/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



const longestWord = (text) => {
    return text.split('').reverse().join('')
}

longestWord('programming')


module.exports = longestWord