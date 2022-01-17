/*https://www.codewars.com/kata/a-needle-in-the-haystack/train/javascript

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"

data working with: array
returns: string with index postion of needle

__pseudocode__
turn the word needle into a string
use indexOf() method to find postion of needle on the haystack array
return a string with 'found the needle at postion with the number of the postion

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. (mdn)
*/

const findNeedle = haystack => {
  let indexPostion = haystack.indexOf('needle')
  return `found the needle at position ${indexPostion}`
}