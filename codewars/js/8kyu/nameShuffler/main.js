/*
https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

Write a function that returns a string in which firstname is swapped with last name.
nameShuffler('john McClane'); => "McClane john" */

const nameShuffler = str => str.split(' ').reverse().join(' ')

