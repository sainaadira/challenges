/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


const falsyBouncer = (array) => {
    return array.filter(el => Boolean(el))
}

falsyBouncer(['', 1, 5, 0, null, NaN, 6, undefined])


module.exports = falsyBouncer