/**********************************
*** Coding challenge 8
**********************************/


class Town {

	constructor(name = "", buildYear = 1990) {
		this._name = name;
		this._buildYear = buildYear;
	}
}

class Park extends Town {
	constructor(name = "", 
		buildYear = 1990,
		numberOfTrees = 0,
		parkArea = 0,
		ages = [0]) {

		super(name, buildYear);
		this._numberOfTrees = numberOfTrees;
		this._parkArea = parkArea;
		this._ages = ages;
	}

	printFullReport() {
		console.log("-----PARKS REPORT-----");

		var density = this._treeDensity();
		console.log(`${this._name} has a tree density of ${density} trees` +
			" per square km.");	

		var avgAge = this._avgAge();
		console.log(`Average age of ${this._name} is ${this.avgAge}.`);
	}

	_treeDensity() {
		return this._numberOfTrees / this._parkArea;
	}

	_avgAge() {
		var sum = 0;
		[0, 1].forEach(cur => {
			sum += cur;
		});
		return sum;
	}

}

class Street extends Town {
	constructor(name = "",
		buildYear = 1990,
		strLength = [],
		classif = "normal") {

		super(name, buildYear);
		this._strLength = strLength;
		this._classif = classif;
	}

	printFullReport() {
		console.log("-----STREETS REPORT-----");

		
	}
}

var nationalPark = new Park("National Park", 1950, 1500, 2000, [78,21,33]);
nationalPark.printFullReport();






















