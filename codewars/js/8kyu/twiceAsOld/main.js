/* https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

P: numbers (dadAge, sonAge)
R: number (years ago since dadAge was 2x sonAge)
E: twiceAsOld(36,7) , 22)
   twiceAsOld(55,30) , 5
P: return dad age - (sonAge *2)
   ensure return is a positve num with math.Abs()
*/


const twiceAsOld = (dadYearsOld, sonYearsOld) => {
  return Math.abs(dadYearsOld - (sonYearsOld * 2))
}