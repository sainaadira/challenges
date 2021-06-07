/* https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript

Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"


P: string of nums
R: string => if even > odd  'even is greater than odd'
             if odd > even 'odd is greater than even'
            if total of even and odd are same 'even and odd are the same'
E: '12' => 'Even is greater than Odd'
   '123' => 'Odd is greater than Even'
P:  split string into array to grab individual nums
   filter though array to find even + odd digits
   add all even digits and find sum
   add all odd digits and find sum
   conditionally check:
   if sum of even is greater return 'even is greater'
   if sum  of odd  is greater  return 'odd is greater'
   return they're the same if total is same
*/

const evenOrOdd = str => {
  let strArr = str.split('')
  let even = strArr.filter(i => i % 2 === 0).reduce((a, b) => (+a) + (+b))
  let odd = strArr.filter(i => i % 2 === 1).reduce((a, b) => (+a) + (+b))
  if (even > odd) {
    return 'Even is greater than Odd'
  } else if (odd > even) {
    return 'Odd is greater than Even'
  } else {
    return 'Even and Odd are the same'
  }
}