var a, b, c;
a = 124;
b = 48;
c = 268;

function calculateTip(bill) {
	if (bill < 50) {
		return bill * 0.2;
	} else if (bill < 200) {
		return bill * 0.15;
	} else {
		return bill * 0.1;
	}
}

var tips = [calculateTip(a), calculateTip(b), calculateTip(c)];
var total = [a + calculateTip(a),
			 b + calculateTip(b),
			 c + calculateTip(c)];

console.log("Tips array: " + tips);
console.log("Total array: " + total);