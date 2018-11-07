var john = {
	paid: [124, 48, 268, 180, 42],
	calcBill: function() {
		var billArray = [];
		for (var i = 0; i < this.paid.length; i++) {
			if (this.paid[i] < 50) {
				billArray.push(this.paid[i] * 0.2);
			} else if (this.paid[i] <= 200) {
				billArray.push(this.paid[i] * 0.15);
			} else if (this.paid[i] > 200) {
				billArray.push(this.paid[i] * 0.1);
			}
		}
		return billArray;
	},
	calcFinal: function() {
		var billArray = this.calcBill(this.paid);
		var finalArray = [];
		for (var i = 0; i < this.paid.length; i++) {
			finalArray.push(this.paid[i] + billArray[i]);
		}
		return finalArray;
	}
}

console.log(john.calcBill());
console.log(john.calcFinal());





