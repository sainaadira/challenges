/* https://www.codewars.com/kata/5709btdd2f088096786000008/train/javascript


Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it. */

const superSize = num =>
  Number(
    String(num)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  )



  /* I spent a lot of time working on this challenge and realized it was because i forgot the sort method. I will keep in mind for future challenges instead of using the reverse method. */
