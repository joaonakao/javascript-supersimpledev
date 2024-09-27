const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset");
const scoreEl = document.querySelector(".score");

let random = 0;
let personMove = "";
let computerMove = "";
let result = "";
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0
};

const randomNumber = function () {
  random = Math.random();
  console.log(random);
};

const displayComputerMove = function () {
  if (random >= 0 && random < 1 / 3) {
    computerMove = "rock";
  } else if (random >= 1 / 3 && random < 2 / 3) {
    computerMove = "paper";
  } else if (random >= 2 / 3 && random < 1) {
    computerMove = "scissors";
  }
  console.log(computerMove);
};

const displayResult = function () {
  if (computerMove === personMove) {
    result = "Tie";
    (score.ties += 1);
  } else if (
    (computerMove === "paper" && personMove === "scissors") ||
    (computerMove === "rock" && personMove === "paper") ||
    (computerMove === "scissors" && personMove === "rock")
  ) {
    result = "You Win";
    (score.wins += 1);
  } else {
    result = "You Lose";
    (score.losses += 1);
  }
  localStorage.setItem("score", JSON.stringify(score));
};



const messageAlert = function () {
  alert(`you picked ${personMove}. Computer picked ${computerMove}. ${result}. 
  Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`);

  document.querySelector(
    ".score"
  ).textContent = `Wins: ${score.wins} Losses: ${score.losses} Tie:${score.ties}`;
};

rock.addEventListener("click", function () {
  personMove = "rock";
  randomNumber();
  displayComputerMove(random);
  displayResult();
  messageAlert();
});

paper.addEventListener("click", function () {
  personMove = "paper";
  randomNumber();
  displayComputerMove(random);
  displayResult();
  messageAlert();
});

scissors.addEventListener("click", function () {
  personMove = "scissors";
  randomNumber();
  displayComputerMove(random);
  displayResult();
  messageAlert();
});

reset.addEventListener("click", function () {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  localStorage.removeItem('score')
});

