let userScore = 0;
let computerScore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

function win(userChoice, computerChoice) {
    userScore++;
    userscore_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " " + "Beats" + " " + convertToWord(computerChoice) + ". You Win!! ";
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userscore_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " " + "Loses to" + " " + convertToWord(computerChoice) + ". You Lost!! ";
}
function draw(userChoice, computerChoice) {
    userScore++;
    computerScore++;
    userscore_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " " + "Equals" + " " + convertToWord(computerChoice) + ". It's a Draw!! ";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

function Play() {
    location.reload();
}

main();

