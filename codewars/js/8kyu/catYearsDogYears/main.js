/* https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that


P: number
R: array with cat dog and human ages
E: humanYearsCatYearsDogYears(2) => [2,24,24]
P: create variable for cat/dog years initalize with 0 first
   loop though human years
   since human years is whole number check if i = 1 o
   cat: 15 dog 15 
   if i = 2 
   cat:9 dog: 9
   otherwise return remaning years after 
   cat: 4 dog: 5
   return the humanYears cat and dog years in an array

*/



const humanYearsCatYearsDogYears = humanYears => {
  let catYears = 0
  let dogYears = 0

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
}
