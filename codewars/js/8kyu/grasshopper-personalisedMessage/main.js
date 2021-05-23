/* Create a function that gives a personalized greeting.
This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest' */


const greet = (name, owner) => {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}

//using tenary operator
const greet = (name, owner) => {
  return name == owner ? 'Hello Boss' : 'Hello guest'
}
