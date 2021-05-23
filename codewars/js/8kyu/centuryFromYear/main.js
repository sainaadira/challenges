// https://www.codewars.com/kata/century-from-year/train/javascript


/* The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

example:



data working with: number (param)
returns => number

example:
Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

pseudocode___
create a variable for century and give it a value of 0
loop through year param and check if i divided by 100 with no remainder
if so, increment century by 1
return century

*/


const century = year => {
  let century = 0;

  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
      century++;
    }
  }
  return century;
}

OR

const century = year => {
  return Math.ceil(year / 100); // math.ceil to round up to nearest century (100)
}
