/*https://www.codewars.com/kata/remove-first-and-last-character/train/javascript

*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a *string. You're given one parameter, the original string.You don't have to worry with strings with less than two *characters. */




const removeChar = str => {
    let answer = str.slice(1, -1)
    // slice method removes characters from string and returns a new string starting from the index 1 to remove the 'h' and only get 'e' in hello. then -1 means counting from right towards the left and removing the first index.
    return answer
};
;