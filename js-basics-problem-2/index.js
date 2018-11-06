mAvg = (116 + 94 + 123) / 3;
jAvg = (110 + 87+130) / 3;

var status;
if (mAvg > jAvg) {
	status = "Mark's team wins!";
} else if (mAvg < jAvg) {
	status = "John's team wins!";
} else if (mAvg == jAvg) {
	status = "Draw!";
}

console.log(status);



