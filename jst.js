/*
Good job so far. Pretty much done with all the javascript stuff. Maybe a few more animations. What's left is to really get into styling the page, making it look pretty. I need to correct the margins and padding, cut off white space of images, add more fonts and borders, etc.
Don't Forgot to Add Comments, edit the ReadMe.
*/
const rock = document.querySelector("#pic1");
const paper = document.querySelector("#pic2");
const scissors = document.querySelector("#pic3");

var pScore = 0;
var cScore = 0;
var tScore = 0;

var playerScore = document.getElementById("pscore");
var computerScore = document.getElementById("cscore");
var tieScore = document.getElementById("tscore");

var compChoice = document.getElementById("compChoice");
var resultText = document.getElementById("results");

var playerChoice, computerChoice;

var roundWinner = "";
var finalWinner = "";

var congratsText = document.getElementById("congrats");
var maybeText = document.getElementById("maybe");

var input;

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  pScore = 0;
  playerScore.textContent = pScore;
  cScore = 0;
  computerScore.textContent = cScore;
  tScore = 0;
  tieScore.textContent = tScore;
  compChoice.textContent = "";
  resultText.textContent = "";
  finalWinner = "";
  congratsText.textContent = "";
  maybeText.textContent = "";
})

function toAnimal(input){
  if (input === "rock"){
    return "Slug";
  }else if (input === "paper"){
    return "Frog";
  }else if (input === "scissors"){
    return "Snake";
  }else{
    return "ERROR";
  }
}

function getComputerChoice(){
  var number = Math.floor(3*Math.random() + 1);
  switch (number){
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      alert("Something went horribly wrong.");
  }
  compChoice.textContent = `The Computer Chose ${computerChoice}`;
}

function findRoundWinner(playerChoice, computerChoice) {
  if (playerChoice === "rock"){
    if (computerChoice === "scissors"){
      roundWinner = "player";
      pScore++;
    }else if(computerChoice === "paper"){
      roundWinner = "computer";
      cScore++;
    }else{
      roundWinner = "tie";
      tScore++;
    }
    updateScore(pScore, cScore, tScore, playerChoice, computerChoice, roundWinner);
  }else if(playerChoice === "paper"){
    if (computerChoice === "rock"){
      roundWinner = "player";
      pScore++;
    }else if (computerChoice === "scissors"){
      roundWinner = "computer";
      cScore++;
    }else{
      roundWinner = "tie";
      tScore++;
    }
    updateScore(pScore, cScore, tScore, playerChoice, computerChoice, roundWinner);
  }else if(playerChoice === "scissors"){
    if (computerChoice === "paper"){
      roundWinner = "player";
      pScore++;
    }else if (computerChoice === "rock"){
      roundWinner = "computer";
      cScore++;
    }else{
      roundWinner = "tie";
      tScore++;
    }
    updateScore(pScore, cScore, tScore, playerChoice, computerChoice, roundWinner);
  }
}

function updateScore(pScore, cScore, tScore, playerChoice, computerChoice, roundWinner){
  if (roundWinner === "player"){
    playerScore.textContent = pScore;
    resultText.textContent = `${toAnimal(playerChoice)} beats ${toAnimal(computerChoice)}! Player wins round!`;
  }else if (roundWinner === "computer"){
    computerScore.textContent = cScore;
    resultText.textContent = `${toAnimal(playerChoice)} loses to ${toAnimal(computerChoice)}. Computer wins round :(`;
  }else if (roundWinner === "tie"){
    tieScore.textContent = tScore;
    resultText.textContent = `${toAnimal(playerChoice)} ties with ${toAnimal(computerChoice)}. No round winner.`;
  }else{
    resultText.textContent = "Something went horribly wrong.";
  }
  if(finalWinner !== "player" && finalWinner !== "computer"){
    if (pScore === 5 ){
      finalWinner = "player";
      congratsText.textContent = "Congratulations, you just won the game!";
      maybeText.textContent = "Feel Free to Keep Play or Press the Reset Button.";
    } else if(cScore === 5){
      finalWinner = "computer";
      congratsText.textContent = "Sorry, Computer beat you :(";
      maybeText.textContent = "Feel Free to Keep Play or Press the Reset Button.";
    }
  }

}

rock.addEventListener("click", (e) =>{
  playerChoice = "rock";
  computerChoice = getComputerChoice();
  compChoice.textContent = `Computer Chooses ${toAnimal(computerChoice)}`;
  findRoundWinner(playerChoice, computerChoice);

})
paper.addEventListener("click", (e) =>{
  playerChoice = "paper";
  computerChoice = getComputerChoice();
  compChoice.textContent = `Computer Chooses ${toAnimal(computerChoice)}`;
  findRoundWinner(playerChoice, computerChoice);

})
scissors.addEventListener("click", (e) =>{
  playerChoice = "scissors";
  computerChoice = getComputerChoice();
  compChoice.textContent = `Computer Chooses ${toAnimal(computerChoice)}`;
  findRoundWinner(playerChoice, computerChoice);
})
