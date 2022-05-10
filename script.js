




//make computer play rps at random

function computerPlay(){
    let compPlay = play[Math.floor(Math.random() * play.length)];
    console.log(compPlay);
    return(compPlay);
}

function playRound(playerSelection, computerSelection) {
    var playLow = playerSelection.toLowerCase();

    // a shit ton of if, else for possible combo
    if(playLow == "rock" && computerSelection == "paper"){
        console.log("Computer Wins: Paper beats rock.")
    }

    else if(playLow == "rock" && computerSelection == "scissors"){
        console.log("You Win: Rock beats scissors!")
    }

    else if(playLow == "scissors" && computerSelection == "rock"){
        console.log("Computer Wins: Rock beats scissors.")
    }

    else if(playLow == "scissors" && computerSelection == "paper"){
        console.log("You Win: Scissors beats paper!")
    }

    else if(playLow == "paper" && computerSelection == "rock"){
        console.log("You Win: Paper beats rock!")
    }

    else if(playLow == "paper" && computerSelection == "scissors"){
        console.log("Computer Wins: Scissors beats paper.")
    }
    else{
        console.log("Tie.")
    }
    
}

//Make it go to 5 rounds
function game(){
    function playRound(){

    }
}



let play = [
    "rock", 
    "paper",
    "scissors"
]

//let user pick rps with any caps
const playerSelection = prompt("Enter rock, paper, or scissors: " )
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

