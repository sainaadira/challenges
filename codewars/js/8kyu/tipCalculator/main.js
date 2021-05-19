/* https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript

Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

Because you're a nice person, you always round up the tip, regardless of the service.
*/

function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case 'terrible':
      return 0;
      break;
    case 'poor':
      return Math.ceil(amount * 0.05);
      break;
    case 'good':
      return Math.ceil(amount * 0.10);
      break;
    case 'great':
      return Math.ceil(amount * 0.15);
      break;
    case 'excellent':
      return Math.ceil(amount * 0.20);
      break;
    default:
      return 'Rating not recognized'
  }
}
