
//make computer play rps at random
function computerPlay(){
    let compPlay = play[Math.floor(Math.random() * play.length)];
    console.log(compPlay);
    return(compPlay);
}

let play = [
    "rock", 
    "paper",
    "scissors"
] 

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // a ton of if, else for possible combo
    if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("Computer Wins: Paper beats rock.");
        return "compWin";
    }

    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win: Rock beats scissors!");
        return "userWin";
    }

    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("Computer Wins: Rock beats scissors.");
        return "userWin";
    }

    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win: Scissors beats paper!");
        return "userWin";
    }

    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win: Paper beats rock!");
        return "userWin";
    }

    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("Computer Wins: Scissors beats paper.");
        return "compWin";
    }

    else if(playerSelection === ""){
        return;
    }

    else{
        console.log("Tie.");
        return "tie";
    }
}

var buttons = document.querySelectorAll("button");
buttons.forEach(button => { button.addEventListener('click', getPlayerChoice) });

function getPlayerChoice(e) {
    let playerSelection= (e.target.id);
    playerChoice = e.target.textContent;
    console.log(playerChoice);
    playRound(playerSelection, computerPlay());
  }

// let numUserWin = 0;
// let numCompWin = 0;
// function getScore(){
//     if(outcome === "compWin"){
//         numCompWin++;
//         // console.log(numCompWin);
//     }   
//     else if(outcome === "userWin"){
//         numUserWin++;
//         // console.log(numUserWin);
//     }
//     else{
//     }
//     console.log("You: " + numUserWin + ", Computer: " + numCompWin);
// }





// Make it go to best of 5

// let numUserWin = 0;
// let numCompWin = 0;
                

  
// function game(){
    
//     var buttonsCount = buttons.length;
//     if (numCompWin < 3 || numUserWin < 3){
//     for (var i = 0; i < buttonsCount; i += 1) { 
//         buttons[i].onclick = function(e) {
//             const playerSelection = this.id;
//                 console.log(playerSelection);
//                 const computerSelection = computerPlay();
//                 let outcome = playRound(playerSelection, computerSelection);
//                 if(outcome === "compWin"){
//                     numCompWin++;
//                     // console.log(numCompWin);
//                 }   
//                 else if(outcome === "userWin"){
//                     numUserWin++;
//                     // console.log(numUserWin);
//                 }
//                 else{
//                 }
//                 console.log("You: " + numUserWin + ", Computer: " + numCompWin);
//             }
            
//         }
//     }
//     else{
//         if(numCompWin > numUserWin){
//         console.log("Computer Wins!");
//         }
//         else if(numUserWin > numCompWin){
//         console.log("You win!")
//         }
//         else{
//         console.log("Its a tie")
//         }
//     }
//     }

