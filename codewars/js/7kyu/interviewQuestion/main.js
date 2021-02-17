/* https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript

You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but wih 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearence in the original string.

More examples:

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

*/

function getStrings(city) {
  let asterisks = ''
  let result = ''
  let appearances = ''
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  city = city.toLowerCase();

  for (let i = 0; i < city.length; i++) {
    for (let j = 0; j < city.length; j++) {
      if (city.charAt(j) == city.charAt(i) && result.indexOf(city.charAt(j)) == -1 && alphabet.indexOf(city.charAt(j)) != -1) {
        asterisks += '*'
      }
    }

    appearances += city.charAt(i);
    if (asterisks != '') {
      result += city.charAt(i) + ':' + asterisks + ','
      asterisks = '';
    }
  }

  return result.substring(0, result.length-1)
}
