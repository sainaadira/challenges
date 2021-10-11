/*
https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript

You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests

p: string
r: boolean
e: 'ahoj' => true || 'goodbye' => false
p: stick greeting and language inside of an object
   loop through the  language opbject and check if the each greeting exists
    if so, return true
    otherwise return false

 */

const lang = {
  hello: 'english',
  ciao: 'italian',
  salut: 'french',
  hallo: 'german',
  hola: 'spanish',
  ahoj: 'czech republic',
  czesc: 'polish'
}

const validateHello = greetings => {
  for (greet in lang) {
    if (greetings.toLowerCase().includes(greet)) return true
  }
  return false
}