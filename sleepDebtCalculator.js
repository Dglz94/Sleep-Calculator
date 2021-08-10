const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 5;
    case "tuesday":
      return 8;
    case "wednesday":
      return 3;
    case "thuesday":
      return 12;
    case "friday":
      return 2;
    case "saturday":
      return 10;
    case "sunday":
      return 5;
  }
};

let days = [
  "monday",
  "tuesday",
  "wednesday",
  "thuesday",
  "friday",
  "saturday",
  "sunday",
];

const getActualSleepHours = () => {
  let hours = 0;
  days.map((dia) => {
    hours += getSleepHours(dia);
  });
  // for(dia of dias){
  //  horas += (getSleepHours(dia));
  // }
  return hours;
};

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("lazy");
  } else {
    console.log("need to sleep");
  }
};

calculateSleepDebt();
