/* https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/train/javascript

Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn/how_many_light_sabers_do_you_own that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

howManyLightsabersDoYouOwn("anyone else") === 0
howManyLightsabersDoYouOwn("Zach") === 18
howManyLightsabersDoYouOwn() === 0
*/

const howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0

