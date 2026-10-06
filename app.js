let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "";
}

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Woohoo! It's a draw! Play again...😏";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Hurrah! You Win!🥳 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Alas! You Lose!🥺 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //  Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //  Draw Game
        drawGame();
    } else {
        let userWin = true; 
        if (userChoice === "stone") {
            //  scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // stone, scissors
            userWin = compChoice === "scissors" ? false : true;  
        } else {
            //  stone, paper
           userWin = compChoice === "stone" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", resetGame);