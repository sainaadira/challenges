/*
 https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript
Write a function, gooseFilter / goose-filter / goose_filter /GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

*/




/*
return non-matches
  return an array containing all of the strings in the input array except those that match strings in geese
  Use a combination of Array.prototype.filter and Array.prototype.inclues

  Steps
  1. filter creates new array
  2. elements that pass test are implemented
  3. includes determines whether an array includes a certain value 
    3.a) returns a true or false (we want the false values to be returned)
  4. Non-Geese elements are returned
*/



const gooseFilter = birds => {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter(bird => !geese.includes(bird))
}
