/*https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo"
name + " does not play banjo"
Names given are always valid strings.

data working with: string parameter
return: string


___pseudocode___
take the name param and search if the first letter contains the letter "r"
make name lowercase so all inputs are cased the same
charAt()- returns a new string at a specified index of the string
if name begins with ar return 'r name' plays banjo
else return name does not play banjo
*/

const areYouPlayingBanjo = name => {
  if (name.toLowerCase().charAt(0) === 'r') {
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}

// with ternary oprerator 
const areYouPlayingBanjo = name => {
  return name.toLowerCase().charAt(0) === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}
