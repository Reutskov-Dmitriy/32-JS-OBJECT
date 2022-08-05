const vehicleCard = {
	make: 'Lexus',
	model: ' Lx570',
	mileage: ' 10000 km',
	year: ' 2020',
	color: ' white',
	tankvolume: 93,
	averageSpeed: 90,
	fuelEconomy: 14 / 100,
	drivers: 1 + 'Bob'
};
const vehicleCardBtn = document.querySelector('.btn_vehicle-card');
const enterDistanceBtn = document.querySelector('.btn_distance');


vehicleCardBtn.onclick = function () {
	for (const [key, value] of Object.entries(vehicleCard)) {
		document.getElementById('displayCard').innerHTML = `${key}: ${value}`;
	}
}

enterDistanceBtn.addEventListener('click', calculateValue)
let distance
const fuelEconomy = vehicleCard.fuelEconomy;
const averageSpeed = vehicleCard.averageSpeed;
let travelTime
let hour

function calculateValue() {
	distance = (document.querySelector('#numberInput').value);
	hour = Math.floor(distance / averageSpeed);
	let minutes = (distance / averageSpeed - hour) * 60;
	console.log(minutes);
	travelTime = +hour
	calcFuelConsumption(fuelEconomy);
	timeWithRest(hour);
	document.querySelector('#answer-time').innerHTML = `${travelTime} h.   ${minutes.toFixed()} min`;

}

// function calcTimeTravel() {
// 	hour = distance / averageSpeed;
// 	hour.toFixed();
// 	document.querySelector('#answer-time').innerHTML = hour

// }

function calcFuelConsumption(fuel) {
	let consumption = Math.round(fuel * distance);
	document.querySelector('#answer-fuel').innerHTML = consumption + ' (L.)'

}


function timeWithRest(time) {
	for (let i = 1; i < time; i++) {
		if (i % 4 == 0) {
			travelTime += 1;
		}
	}
}



