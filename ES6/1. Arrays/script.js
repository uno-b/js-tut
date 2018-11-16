/**************************
*** Arrays
**************************/

const boxes = document.querySelectorAll(".box");

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
	cur.style.backgroundColor = "dodgerblue";
});


// ES6 - using Array's "from" method
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => 
	cur.style.backgroundColor =
	"dodgerblue");

// Alternative - using 2nd parameter of Array's "from()" method
const boxesArr66 = Array.from(boxes, cur =>
	cur.style.backgroundColor = "dodgerblue");


// ES5
for (var i = 0; i < boxesArr5.length; i++) {
	if (boxesArr5[i].className === "box blue") {
		continue;
	}

	boxesArr5[i].textContent = "I changed to blue!";
}


// ES6 - for of loop
for (const cur of boxesArr6) {
	if (cur.className.includes("blue")) {
		continue;
	}

	cur.textContent = "I changed to blue!";
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
	return cur >= 18;
});
console.log(full); // false, false, false, true, false, false

console.log(full.indexOf(true)); // 3


// ES6 - new Array methods "findIndex()" and "find()"
console.log(ages.findIndex(cur => cur >= 18)); // 3
console.log(ages.find(cur => cur >= 18)); // 21





























































