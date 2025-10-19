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
  if (humanChoice === computerChoice) {
    console.log("Draw!")
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else { 
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
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
  } else if (humanScore < computerScore) {
    console.log("THE WINNER IS ROBOT 🤖!!!");
  } else {
    console.log("DRAW 👱🤖!!!");
  }
}

playGame();