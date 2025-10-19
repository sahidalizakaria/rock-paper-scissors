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
  return `Robot: ${computerChoice}`;
}

function getHumanChoice(number=prompt("Enter number: 1 (Rock), 2 (Paper), or 3 (Scissors)")) {
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
  return `Human: ${humanChoice}`;
}
console.log(getComputerChoice());
console.log(getHumanChoice());