/*
https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ''       => "Hello, World!" # name is an empty String

 */


   // my solution: i got stuck on this one and only got 3 out of 4 correct.
   // i spent time with the substring method but had difficulty
   //figuring out how to use this method with my code.

 function hello(name) {
  if (name){
    return 'Hello, ' + name.split(' ').map(n => n.charAt(0).toUpperCase() + n.slice(0, 1)).join(' ') + '!';
   }
  else{
  return  'Hello, World!'
  }
  }


// the correct solution that was closest to my attempt.
/*this solution does not use the split or join method and
uses the substring method for the first initial to be capitalized
and also used again to keep the remaining letters lowercase */

  function hello(name){
  if (name){
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  } else {
    return "Hello, World!";
  }
}
