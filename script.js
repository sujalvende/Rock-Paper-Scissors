let userScore = 0;
let compScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

let userScoreSpan = document.querySelector("#user-score");
let compScoreSpan = document.querySelector("#comp-score");

let messageContainer = document.querySelector("#msg");

let allChoices = ["rock", "paper", "scissor"];

let userChoice = "";
let compChoice = "";

const choices = document.querySelectorAll(".choice");

function getComputerChoise() {
    compChoice = allChoices[Math.floor(Math.random()*3)];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        userChoice = choice.id;

        getComputerChoise();

        updateScore();
    });
});

function updateScore() {
    if(userChoice === "rock" && compChoice === "scissor") {
        userScore++;
        messageContainer.innerText = "You Win! Rock crushes Scissor.";
    }  else if(userChoice === "paper" && compChoice === "rock") {
        userScore++;
        messageContainer.innerText = "You Win! Paper covers Rock.";
    } else if(userChoice === "scissor" && compChoice === "paper") {
        userScore++;
        messageContainer.innerText = "You Win! Scissor cuts Paper.";
    } else if(userChoice === compChoice) {
        messageContainer.innerText = "It's a Tie!";
        // tie
    }

    if(compChoice === "rock" && userChoice === "scissor") {
        compScore++;
        messageContainer.innerText = "You Lose! Rock crushes Scissor.";
    }  else if(compChoice === "paper" && userChoice === "rock") {
        compScore++;
        messageContainer.innerText = "You Lose! Paper covers Rock.";    
    } else if(compChoice === "scissor" && userChoice === "paper") {
        compScore++;
        messageContainer.innerText = "You Lose! Scissor cuts Paper.";
    }

    userScoreSpan.innerText = userScore;
    compScoreSpan.innerText = compScore;
}
