/* https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript


Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
 "Programmer"	 "Hipster Craft Beer"
 "Bike Gang Member"	"Moonshine"
 "Politician"	"Your tax dollars"
 "Rapper"	"Cristal"
 *anything else*	"Beer"   */


function getDrinkByProfession(param){
param = param.toLowercase()

switch(param){
case 'jabroni':
return 'Patron Tequila'
break;
case 'school counselor':
return 'Anything with Alcohol'
break;
case 'programmer':
return 'Hipster Craft Beer'
break;
case 'bike gang member':
return 'Moonshine'
break;
case 'politician':
return 'Your tax dollars'
break;
case 'rapper':
return 'Cristal'
break;
default:
return 'Beer'
}

}
