/* https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript


Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
 "Programmer"	 "Hipster Craft Beer"
 "Bike Gang Member"	"Moonshine"
 "Politician"	"Your tax dollars"
 "Rapper"	"Cristal"
 *anything else*	"Beer"  

 data working with: string/ obj
 returns => string

__pseudocode__
 convert string param to lowercase
 store all input/output in an obj
 bracket notation to access param from drink obj
 or return 'beer' for all other inputs
 
 */


const getDrinkByProfession = param => {
  const drinks = {
    'jabroni': 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    'programmer': 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    'politician': 'Your tax dollars',
    'rapper': 'Cristal'
  }

  return drinks[param.toLowerCase()] || 'Beer'
}
