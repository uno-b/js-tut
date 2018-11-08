// Function constructor

var john = {
	name: "John",
	yearOfBirth: 1990,
	job: "Teacher"
}

// Name starts with capital for constructors
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function() {
	console.log(2018 - this.yearOfBirth);
}
// Not in the constructor, but we can still use it

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "Teacher"); // john is now a Person object

john.calculateAge(); // 28

var jane = new Person("Jane", 1969, "Designer");
var mark = new Person("Mark", 1948, "Retired");
// Each of these has the function "calculateAge"

jane.calculateAge(); // 49
mark.calculateAge(); // 70

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
// All gives the same name "Smith"











