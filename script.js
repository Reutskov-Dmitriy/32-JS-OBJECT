const vehicleCard = {
	make: 'Make: Lexus',
	model: ' Model: Lx570',
	mileage: ' Milage: 10000 km',
	year: ' Year: 2020',
	color: ' Color: white',
	tankvolume: ' Tank volume: 93 l.',
	fuel: ' Fuel Economy: City 12/ Hwy 16',
	drivers: ' Drivers: Bob'
};
let vehicleCardBtn = document.querySelector('.btn_vehicle-card');


vehicleCardBtn.onclick = function () {
	document.querySelector('#displayCard').innerHTML = Object.values(vehicleCard);
}



