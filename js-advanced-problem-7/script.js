/*************************************
*** CODING CHALLENGE 7
*************************************/

// New score that can't be overridden and is private
(function() {
	// Question constructor
	var Question = function(question, ansArr, corrAns) {
		this.question = question;
		this.ansArr = ansArr;
		this.corrAns = corrAns;
	}

	var countryQ = new Question(
		"What country has the coldest capital in the world?",
		["1. Russia", "2. Zimbabwe", "3. Mongolia"],
		2);

	var pLanguageQ = new Question(
		"What is Uno's favorite language?",
		["1. I don't care", "2. C++", "3. Java", "4. Other"],
		2);

	var weirdQ = new Question(
		"How many genders are there in the world?",
		["1. One", "2. Two", "3. More than two"],
		1);

	var questions = [countryQ, pLanguageQ, weirdQ];
	var points = 0;

	while (true) {
		// Get random question
		var index = Math.floor(Math.random() * 3);
		var currentQuestion = questions[index];

		// Show answers
		for (var i = 0; i < currentQuestion.ansArr.length; i++) {
			console.log(currentQuestion.ansArr[i]);
		}

		// Prompt from the user
		var ans = prompt(currentQuestion.question);

		// Check answer
		if ((parseInt(ans) - 1) === currentQuestion.corrAns) {
			points++;
			console.log("\n Correct answer!\n Total points: " + points + ".\n");
		} else {
			console.log("\n Wrong answer.\n Total points: " + points + ".\n");
			break;
		}
	}
})