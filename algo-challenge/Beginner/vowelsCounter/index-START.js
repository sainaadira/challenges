/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/



const vowelsCounter = (text) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {
            count++
        }
    }
    return count
}

console.log(vowelsCounter('test argument')
)

module.exports = vowelsCounter;
