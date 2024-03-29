/* https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

P: string, number
R: number
E: "Idwal Augustin", 420
P: split string into array
   call reduce function to add letters * 30
*/

const billboard = (name, price = 30) => {
  return name.split('').reduce(sum => sum + price, 0)
}

// shorthand using spread operator
const billboard = (name, price = 30) => {
  return [...name].reduce(sum => sum + price)
}

// O(n)
const billboard = (name, price = 30) => {
  let cost = 0
  for (let i = 0; i < name.length; i++) {
    cost += price
  }
  return cost
}