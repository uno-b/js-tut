var mMass = 30;
var mHeight = 170;
var jMass = 20;
var jHeight = 160;

function findBMI(mass, height) {
	return mass / (height * height);
}

var mTaller = findBMI(mMass, mHeight) > findBMI(jMass, jHeight) ? true : false;

console.log("Is Mark's BMI higher than John's? -" + mTaller);




