/***********************************************
*** Old way asynchronous JS with callbacks
***********************************************/


/*function getRecipe() {
	setTimeout(() => {
		const recipeID = [523, 883, 432, 974];
		console.log(recipeID);

		setTimeout((id) => {
			const recipe = {title: "Fresh tomato pasta",
				publisher: "Jonas"};
			console.log(`${id}: ${recipe.title}`);

			setTimeout(publisher => {
				const recipe2 = {title: "Italian pizza",
					publisher: "Jonas"};
				console.log(recipe2);
			}, 1500, recipe.publisher);
		}, 1000, recipeID[2]);
	}, 1500);
}

getRecipe();
*/

/****************************************
*** From callback hell to promises
****************************************/


const getIDs = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([523, 883, 432, 974]);
	}, 1500);
});

const getRecipe = recID => {
	return new Promise((resolve, reject) => {
		setTimeout(ID => {
			const recipe = {title: "Fresh tomato pasta",
				publisher: "Jonas"};
			resolve(`${ID}: ${recipe.title}`);
		}, 1500, recID);
	});
};

const getRelated = publisher => {
	return new Promise((resolve, reject) => {
		setTimeout(pub => {
			const recipe = {title: "Italian Pizza",
				publisher: "Jonas"};
			resolve(`${pub}: ${recipe.title}`);
		}, 1500, publisher);
	});
};

getIDs
.then(IDs => {
	console.log(IDs);
	return getRecipe(IDs[2]);
})
.then(recipe => {
	console.log(recipe);
	return getRelated("Jonas");
})
.then(recipe => {
	console.log(recipe);
})
.catch(error => {
	console.log("Error.");
});













