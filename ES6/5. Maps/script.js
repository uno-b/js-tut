/********************************
*** Maps - Reasons to use a map rather than an object:
*** 1. We can use anything as keys
*** 2. Easy to iterate
*** 3. Really easy to get the size of the map
********************************/


const question = new Map();
question.set("question", "What is the official name of the latest " + 
	"major JavaScript version?");
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer!");
question.set(false, "Wrong, please try again.");

console.log(question.get("question"));
// What is the official name of the latest major JavaScript version?

console.log(question.size);
// 8

if (question.has(4)) {
	// question.delete(4);
	// (Removes data on 4th index)

	console.log("Data on 4th index exists.");
}

/*question.forEach((value, key) =>
	console.log(`This is ${key}, and it's set to ${value}.`));
*/
// Better alternative
for (let [key, value] of question.entries()) {
	console.log(`This is ${key}, and it's set to ${value}.`);
}

console.log(" ");

console.log(question.get("question"));
for (let [key, value] of question.entries()) {
	if (typeof(key) === "number") {
		console.log(`Answer ${key}: ${value}`);
	}
}
const ans = parseInt(prompt("Write the correct answer"));
console.log(question.get(ans === question.get("correct")));






































