let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const runnersAge = 18;

if (registeredEarly && runnersAge >= 18) {
	raceNumber += 1000;
	console.log(`Racers number ${raceNumber} will race at 9:30 am`);
} else if (registeredEarly && runnersAge < 18) {
	console.log(`Racers number ${raceNumber} will race at 12:30 pm`);
} else {
	console.log(`Racers number ${raceNumber} will race at 11:00 am`);
}
