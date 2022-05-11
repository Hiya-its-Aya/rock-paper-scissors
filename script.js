
//make computer play rps at random

function computerPlay(){
    let compPlay = play[Math.floor(Math.random() * play.length)];
    console.log(compPlay);
    return(compPlay);
}

function playRound(playerSelection, computerSelection) {
    var playLow = playerSelection.toLowerCase();

    // a ton of if, else for possible combo
    if(playLow == "rock" && computerSelection == "paper"){
        console.log("Computer Wins: Paper beats rock.");
        return "compWin";
    }

    else if(playLow == "rock" && computerSelection == "scissors"){
        console.log("You Win: Rock beats scissors!");
        return "userWin";
    }

    else if(playLow == "scissors" && computerSelection == "rock"){
        console.log("Computer Wins: Rock beats scissors.");
        return "userWin";
    }

    else if(playLow == "scissors" && computerSelection == "paper"){
        console.log("You Win: Scissors beats paper!");
        return "userWin";
    }

    else if(playLow == "paper" && computerSelection == "rock"){
        console.log("You Win: Paper beats rock!");
        return "userWin";
    }

    else if(playLow == "paper" && computerSelection == "scissors"){
        console.log("Computer Wins: Scissors beats paper.");
        return "compWin";
    }

    else{
        console.log("Tie.");
        return "tie";
    }
}


//Make it go to best of 5

function game(){
    let numUserWin = 0;
    let numCompWin = 0;
    do{
        const playerSelection = prompt("Enter rock, paper, or scissors: " )
        const computerSelection = computerPlay();
        let outcome =  playRound(playerSelection, computerSelection);
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
        console.log("You: " + numUserWin + ", Computer: " + numCompWin)
    } while(numCompWin < 3 && numUserWin < 3){ 
        if(numCompWin > numUserWin){
            console.log("Computer Wins!");
        }
        else if(numUserWin > numCompWin){
            console.log("You win!")
        }
        else{
            console.log("Its a tie")
        }
    }    
}

let play = [
    "rock", 
    "paper",
    "scissors"
]

game()

