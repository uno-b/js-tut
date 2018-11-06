var john = {
	name: "John",
	weight: 100,
	height: 170,
	calcBMI: function() {
		return this.weight / (this.height * this.height);
	}
}

var mark = {
	name: "Mark",
	weight: 110,
	height: 160,
	calcBMI: function() {
		return this.weight / (this.height * this.height);
	}
}

if (john.calcBMI() > mark.calcBMI()) {
	console.log("John's BMI is higher.");
} else if (john.calcBMI() < mark.calcBMI()) {
	console.log("Mark's BMI is higher.");
} else if (john.calcBMI() == mark.calcBMI()) {
	console.log("Both have equal BMI.");
} else {
	console.log("Error.");
}









