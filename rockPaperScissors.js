const getUserChoice = (userInput) => {
  userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return userInput;
  } else {
    console.log("palabra no valida");
  }
};

const getComputerChoice = () => {
  let rnd = Math.floor(Math.random() * 3);
  if (rnd === 0) {
    return "rock";
  } else if (rnd === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "TIE";
  }
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "User";
    } else {
      return "CPU";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "User";
    } else {
      return "CPU";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "User";
    } else {
      return "CPU";
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice();
  console.log("Computer: " + computerChoice + " User: " + userChoice);
  let winner = determineWinner(userChoice, computerChoice);
  if (userChoice === "bomb") {
    console.log("User");
  } else {
    console.log(winner);
  }
};

playGame();
