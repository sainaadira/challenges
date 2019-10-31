// // https://www.codewars.com/kata/well-of-ideas-easy-version/train/javascript
//
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// function well(x){
//   if (x === 1 || 2){
//     return 'Publish!'
//   }
//   else if(x > 2){
//     return 'I smell a series!'
//   }
//   else if(x ===0)
//   return 'Fail'
//
// }
//
// above was my orginal try but below is the correct answer.



function well(x) {
  switch (x.filter(i => i === 'good').length) {
    case 0:
      return 'Fail!'
    case 1:
    case 2:
      return 'Publish!'
    default:
      return 'I smell a series!'
  }
}
