/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// data working with: strings, objects, arrays

const maxRecurringChar = (text) => {
    let characters = {}
    let charactersArr, charactersValArr = []
    let maxCharacterVal = 0

    // for..in to iterate object props and check the props of an object
    for (let char of text) {
        if (characters.hasOwnProperty(char)) {
            characters[char]++
        } else {
            characters[char] = 1;
        }
    }
    // returns an arr of the property's keys in the characters object
    charactersArr = Object.keys(characters)
    // returns an arr the properties of the characters object
    charactersValArr = Object.values(characters)

    // math.max() is used to find the max val in the array of values and store charactersValArr
    maxCharacterVal = Math.max(...charactersValArr)

    return charactersArr[charactersValArr.indexOf(maxCharacterVal)]

}

maxRecurringChar('hello')



module.exports = maxRecurringChar;