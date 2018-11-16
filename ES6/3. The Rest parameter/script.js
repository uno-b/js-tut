/******************************
*** The Rest parameter
******************************/

/*// ES5 - takes an object of unknown number of arguments
function isFullAge5() {
	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function(cur) {
		console.log((2016 - cur) >= 18);
	});
}

isFullAge5(1990, 1999, 1965);
console.log(" "); // for space


// ES6 - takes an array of unknown number of arguments
function isFullAge6(...years) {
	years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);*/


// Some changes
// ES5 - takes an object of unknown number of arguments
function isFullAge5(limit) {
	var argsArr = Array.prototype.slice.call(arguments, 1);

	argsArr.forEach(function(cur) {
		console.log((2018 - cur) >= limit);
	});
}

isFullAge5(16, 1990, 1999, 1965);
console.log(" "); // for space


// ES6 - takes an array of unknown number of arguments
function isFullAge6(limit, ...years) {
	years.forEach(cur => console.log((2018 - cur) >= limit));
}

isFullAge6(1, 1990, 1999, 1965, 2016, 1987);


































