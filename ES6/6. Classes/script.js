/************************************
*** Classes
************************************/


// ES5
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
}

var john5 = new Person5("John", 1990, "teacher");
john5.calculateAge();


// ES6
class Person6 {
	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calculateAge() {
		var age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
	}

	static greeting() {
		console.log("Hey there!");
	}
}

const john6 = new Person6("John", 1990, "teacher");
john6.calculateAge();

// Static method
Person6.greeting();














