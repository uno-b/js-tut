/************************************
*** Passing functions as arguments
************************************/

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];	// Result array
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2018 - el;
}

function isFullAge(el) {
	return (2018-el) >= 18;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(years, isFullAge);

console.log(ages);
console.log(fullAges);

/*
* First class functions - functions that are treated like any
* other variables.
*/








