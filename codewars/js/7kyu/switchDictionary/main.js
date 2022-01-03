/* https://www.codewars.com/kata/5a21e090f28b824def00013c/train/javascript
In this kata, you will take the keys and values of an object and swap them around.

You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys, and list the old keys as values under their original keys.

For example, given the dictionary: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},

you should return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}

Notes:
The dictionary given will only contain strings
The dictionary given will not be empty
You do not have to sort the items in the lists

P: object {key: value}
R: object with values swapped:  {value: ['key']}
E: input:  {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'}
   return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}
P:  i need to create an empy object (hash map) to store swapped values
    loop through my test object with for..in loop
    grab the keys of the object and store into a variable
    check to see if the keys exist in the map
    if not, create an empty array for it
    if so, push the value into an array
    return map
 */

const switchDict = dict => {
  const map = {}

  // grabbing all of the keys in dict
  for (const key in dict) {
    // storing the swapped value inside of newValue
    const newValue = dict[key]
    // if newValue does not exist inside the map, create an array
    if (!map[newValue]) {
      map[newValue] = []
    }
    // otherwise push the key inside of the array
    map[newValue].push(key)
  }
  // return map
  return map
}