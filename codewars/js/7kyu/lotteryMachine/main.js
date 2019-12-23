/*https://www.codewars.com/kata/lottery-machine/train/javascript

Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function lottery()). Your code inside lottery() must filter out all letters and return unique integers as a string. If there are no integers in the string return - “One more run!”.*/

function lottery(str){
   str = str.replace(/[a-z,A-Z]/gi, '').split('')
   let newStr = []
   str.forEach(n => {
     if(!newStr.includes(n)){
       newStr.push(n)
     }
   })
   newStr = newStr.join('')
   if (newStr.length === 0){
     return 'One more run!'
   } else
  return newStr
}
