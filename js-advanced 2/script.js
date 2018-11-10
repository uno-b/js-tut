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


/******************************
*** Closeres
******************************/

function retirement(retirementAge) {
	var a = " years left until retirement.";
	return function(yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

// 1
var retirementUS = retirement(66);
retirementUS(1990);

// 2
retirement(66)(1990);

/*
* The inner function keeps the outer function's variables in memory,
* even after the outer function has returned.This is built-in in 
* Javascript and the closures happen automatically.
*/


/********************************************
*** Bind, call and apply methods
********************************************/

var john = {
	name: "John",
	age: 26,
	job:"teacher",
	presentation: function(style, timeOfDay) {
		if (style === "formal") {
			console.log("Good " + timeOfDay + ". " +
				"Name: " + this.name + " age: " + this.age +
				" job: " + this.job + " style: " +
				style);
		} else if (style === "casual") {
			console.log("Sup. Good " + timeOfDay + ". " +
				"Name: " + this.name + " age: " + this.age +
				" job: " + this.job + " style: " +
				style);
		}
	}
};

var emily = {
	name: "Emily",
	age: 35,
	job: "Designer"
}

john.presentation("formal", "morning");

john.presentation.call(emily, "casual", "evening"); 
//Borrows method

// john.presentation.apply(emily, ["casual", "evening"]);
// Won't work, since the function doesn't expect an array.
// Only difference from call method is that apply method takes an array

var johnCasual = john.presentation.bind(john, "friendly");
// Returns a variable. Binds a preset argument to a function
// To use the function, you only have to give arguments to the
// remaining parameters (in this case, "timeOfDay").
// Also called carrying.

johnFriendly("morning");
johnFriendly("night");







