/*https://www.codewars.com/kata/remove-first-and-last-character/train/javascript

*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a *string. You're given one parameter, the original string.You don't have to worry with strings with less than two *characters. 

data working with: string
returns: string with first and last character removed

slice() - extracts a section of a string and returns it as a new string, without modifying the original string.


__pseudocode___
extract first and last characters using slice method
(1, -1) : begin index and end index

*/



const removeChar = str => {
    let string = str.slice(1, -1)
    // slice method removes characters from string and returns a new string starting from the index 1 to remove the 'h' and only get 'e' in hello. then -1 means counting from right towards the left and removing the first index.
    return string
}