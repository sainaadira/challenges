/*
https://www.codewars.com/kata/55acfc59c3c23d230f00006d/train/javascript

get ascii value of character

SOURCE: MDN
The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

*/


const getASCII = c => {
  let value = c.charCodeAt()
  return value
}

// without storing into variable

const getASCII = c => {
  return c.charCodeAt()
}
