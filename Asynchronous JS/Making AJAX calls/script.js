/**************************************************
*** Making AJAX calls with fetch and promises
**************************************************/


function getWeather(woeid) {
	fetch(`https://www.metaweather.com/api/location/${woeid}`)
	.then(result => {
		console.log(result);
		return result.json();
	})
	.then(data => {
		const today = data.consolidated_weather[0];
		console.log(`Temperatures in ${data.title} stay between ` + 
			`${today.min_temp} and ${today.max_temp}.`);
	})
	.catch(error => {
		console.log(error);
	});
}
getWeather(2487956);
getWeather(44418);


/***************************************************
*** Making AJAX calls with fetch and AsyncAwait
***************************************************/


async function getWeatherAW() {
	try {
		const result = await fetch(`https://www.metaweather.com/api/location/${woeid}`);
	const data = await result.json();
	const tomorrow = data.consolidated_weather[1];
	console.log(`Temperatures tomorrow in ${data.title} ` + 
		`stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
	return data;
	} catch() {
		alert(error);
	}
}	
getWeatherAW(2487956);

let dataLondon;
getWeatherAW(44418).then(data => {
	dataLondon = data;
	console.log(dataLondon);
});














