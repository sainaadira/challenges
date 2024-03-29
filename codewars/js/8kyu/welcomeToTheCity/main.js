/*
https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript

Create a method sayHello/say_hello/SayHello that takes an input of  name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

data working with: array of strings
returns: string
expected output:
Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
*/

const sayHello = (name, city, state) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
