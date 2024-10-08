const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset-score-button");
const scoreEl = document.querySelector(".score");
let result = document.querySelector('.js-result');


const updateScore = function(){
  document.querySelector(
    ".score"
  ).textContent = `Wins: ${score.wins} Losses: ${score.losses} Tie:${score.ties}`;
}


let random = 0;
let personMove = "";
let computerMove = "";

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

const displayMoves = function(){
  let moves = document.querySelector('.js-moves');
  moves.textContent = `You ${personMove} - ${computerMove} computer`;
}

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
    result.textContent = "Tie";
    (score.ties += 1);
  } else if (
    (computerMove === "paper" && personMove === "scissors") ||
    (computerMove === "rock" && personMove === "paper") ||
    (computerMove === "scissors" && personMove === "rock")
  ) {
    result.textContent = "You Win";
    (score.wins += 1);
  } else {
    result.textContent = "You Lose";
    (score.losses += 1);
  }
  localStorage.setItem("score", JSON.stringify(score));

  updateScore();
};

rock.addEventListener("click", function () {
  personMove = "rock"
  displayMoves();
  randomNumber();
  displayComputerMove(random);
  displayResult();
});

paper.addEventListener("click", function () {
  personMove = "paper"
  displayMoves();
  randomNumber();
  displayComputerMove(random);
  displayResult();

});

scissors.addEventListener("click", function () {
  personMove = "scissors"
  displayMoves();
  randomNumber();
  displayComputerMove(random);
  displayResult();

});

reset.addEventListener("click", function () {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  localStorage.removeItem('score');
  updateScore();
});

