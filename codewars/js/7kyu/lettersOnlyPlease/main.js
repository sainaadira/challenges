/* https://www.codewars.com/kata/59be6bdc4f98a8a9c700007d/train/javascript

Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces. We assume that there are no double spaces or line breaks.

Write a function that takes a string and returns a string without the unnecessary characters.

Examples
removeChars('.tree1')    ==> 'tree'

removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'

removeChars('john.dope@dopington.com')    ==> 'johndopedopingtoncom'

removeChars('my_list = ["a","b","c"]')    ==> 'mylist  abc'

removeChars('1 + 1 = 2')    ==> '    ' (string with 4 spaces)

removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_")



p: string with symbols and numbers
r: string that contains only A-Z, a-z
e: '.tree1' => 'tree'
p: 
   split the string into an array of words
   filter through string
   check if the string is empty or 
   check if lowercase string does not equal to uppercase string
   return result.join('')
*/


const removeChars = (s) => s.split('').filter(s => s === ' ' || s.toLowerCase() !== s.toUpperCase()).join('')
