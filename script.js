function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else if (randomNumber === 3) {
    computerChoice = "Scissors";
  }

  console.log(`Robot: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  number = prompt("Enter number: 1 (Rock), 2 (Paper), or 3 (Scissors)")

  let humanChoice;
  switch (parseInt(number)) {
    case 1:
      humanChoice = "Rock";
      break;
    case 2:
      humanChoice = "Paper";
      break;
    case 3:
      humanChoice = "Scissors";
      break;
  }

  console.log(`Human: ${humanChoice}`);
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock") {
    if (computerChoice === "Rock") {
      console.log("Draw!")
    } else if (computerChoice === "Paper") {
      console.log("You lose! Paper beats Rock.")
      computerScore++
    } else if (computerChoice === "Scissors") {
      console.log("You win! Rock beats Scissors.")
      humanScore++
    }
  } 
  else if (humanChoice === "Paper") {
    if (computerChoice === "Rock") {
      console.log("You win! Paper beats Rock.")
      humanScore++
    } else if (computerChoice === "Paper") {
      console.log("Draw!")
    } else if (computerChoice === "Scissors") {
      console.log("You lose! Scissors beats Paper.")
      computerScore++
    }
  }
  else if (humanChoice === "Scissors") {
    if (computerChoice === "Rock") {
      console.log("You lose! Rock beats Scissors.")
      computerScore++
    } else if (computerChoice === "Paper") {
      console.log("You win! Scissors beats Paper.")
      humanScore++
    } else if (computerChoice === "Scissors") {
      console.log("Draw!")
    }
  }
}

function playGame() {
  for (i=0; i<5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Your Score: ${humanScore}`);
    console.log(`Its Score: ${computerScore}\n\n`);
  }

  if (humanScore > computerScore) {
    console.log("THE WINNER IS YOU 👱!!!");
  } else {
    console.log("THE WINNER IS ROBOT 🤖!!!");
  }
}

playGame();