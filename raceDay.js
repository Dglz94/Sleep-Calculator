let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegisterEarly = false;
let runnerAge = 21;

if (runnerRegisterEarly && runnerAge >= 18) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && runnerRegisterEarly) {
  console.log("race 9:30AM, raceNumber: " + raceNumber);
} else if (runnerAge >= 18 && !runnerRegisterEarly) {
  console.log("race 11:00AM, raceNumber: " + raceNumber);
}

if (runnerAge < 18) {
  console.log("race 12:30AM, raceNumber: " + raceNumber);
}
