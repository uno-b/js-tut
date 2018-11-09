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


/***********************************
*** Functions returning functions
***********************************/

function interviewQuestion(job) {
	if (job === "designer") {
		return function(name) {
			console.log(name + ", can you please explain what UX is?");
		}
	} else if (job === "teacher") {
		return function(name) {
			console.log("What subject do you teach, " + name + "?");
		}
	} else {
		return function(name) {
			console.log("Hello " + name + ", what do you do?");
		}
	}
}

// 1
var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("Sabrina");

// 2
interviewQuestion("designer")("Mark");


/**************************************************
*** Immediately Invoked Function Expression (IIFE)
**************************************************/

// Bad practice !!!
function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();

// Good practice - IIFE
(function() {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

// IIFE with parameters
(function(goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= (5 - goodLuck));
})(5);

/*
* Useful for calling anonymous functions and immediately calling 
* the function
*/









