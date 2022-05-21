
// here is a comment 
var buttons = document.querySelectorAll("button");
buttons.forEach(button => {button.addEventListener('click', getPlayerChoice) });

const container = document.querySelector('#container');

const compPlayText = document.createElement('div');
const content = document.createElement('div');
const score = document.createElement('div');
const winnerText = document.createElement('div');


let numUserWin = 0;
let numCompWin = 0;

let play = [
    "rock", 
    "paper",
    "scissors"
] 


//make computer play rps at random
function computerPlay(){
    let compPlay = play[Math.floor(Math.random() * play.length)];

    compPlayText.classList.add('compPlayText');
    compPlayText.textContent = "Computer Play: " + compPlay;

    container.appendChild(compPlayText);
    return(compPlay);
}



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // a ton of if, else for possible combo
    if(playerSelection == "rock" && computerSelection == "paper"){
        content.classList.add('content');
        content.textContent = "Computer Wins: Paper beats rock.";

        container.appendChild(content);
        return "compWin";
    }

    else if(playerSelection == "rock" && computerSelection == "scissors"){
        content.classList.add('content');
        content.textContent = "You Win: Rock beats scissors!";

        container.appendChild(content);
        return "userWin";
    }

    else if(playerSelection == "scissors" && computerSelection == "rock"){
        content.classList.add('content');
        content.textContent = "Computer Wins: Rock beats scissors.";

        container.appendChild(content);
        return "compWin";
    }

    else if(playerSelection == "scissors" && computerSelection == "paper"){
        content.classList.add('content');
        content.textContent = "You Win: Scissors beats paper!";

        container.appendChild(content);
        return "userWin";
    }

    else if(playerSelection == "paper" && computerSelection == "rock"){
        content.classList.add('content');
        content.textContent = "You Win: Paper beats rock!";

        container.appendChild(content);
        return "userWin";
    }

    else if(playerSelection == "paper" && computerSelection == "scissors"){
        content.classList.add('content');
        content.textContent = "Computer Wins: Scissors beats paper.";

        container.appendChild(content);
        return "compWin";
    }

    else{
        content.classList.add('content');
        content.textContent = "Tie.";

        container.appendChild(content);
        return "tie";
    }
}



function getPlayerChoice(e) {
    let playerSelection= (e.target.id);
    playerChoice = e.target.textContent;
    console.log(playerChoice);
    let outcome = playRound(playerSelection, computerPlay());

    if(outcome === "compWin"){
        numCompWin++;
        // console.log(numCompWin);
    }   
    else if(outcome === "userWin"){
        numUserWin++;
        // console.log(numUserWin);
    }
    else{
    }
    score.classList.add('score');
    score.textContent = "You: " + numUserWin + ", Computer: " + numCompWin;

    container.appendChild(score);

    if(numCompWin > 2 || numUserWin > 2){
        if(numCompWin > numUserWin){
        winnerText.classList.add("winnerText");
        winnerText.textContent = "Computer Wins! Reload to play again! ";

        container.appendChild(winnerText);
        winnerText.style = "background-color: red"
        }
        else{
        winnerText.classList.add('WinnerText');
        winnerText.textContent = "You win! Reload to play again! ";

        container.appendChild(winnerText);
        winnerText.style = "background-color: green"
        }
        disableButtons();
    
    } 
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

