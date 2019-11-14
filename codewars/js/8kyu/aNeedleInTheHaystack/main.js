/*https://www.codewars.com/kata/a-needle-in-the-haystack/train/javascript

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" */

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. (mdn)

// 1) function loops through the haystack array searching for the string 'needle' and returning the index
// 2) console.log a string'found the needle at position' + the returned index


function findNeedle(haystack) {
  let needleIndex = haystack.indexOf('needle');
  return 'found the needle at position ' + needleIndex;
}

findNeedle(['giraffe', 'dog', 'london', 'needle', 'hello', 'sunflower']);

OR


function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
