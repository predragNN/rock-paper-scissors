function getCompucterChoice() {
    let randomIzbor = Math.floor(Math.random()*3);
    if (randomIzbor == 0)
        return "stone";
    else if (randomIzbor == 1)
        return "paper";
    else
        return "scissors";
}

let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

function playRound (human, computer) {
    if (human == "Rock" && computer == "Paper"){
        computerScore++;
        return "PC choose: "+computer+" => You lose!";
    }
    else if (human == "Rock" && computer == "Scissors"){
        humanScore++;
        return "PC choose: "+computer+" => You won!";
    }
    else if (human == "Paper" && computer == "Rock"){
        humanScore++;
        return "PC choose: "+computer+" => You won!";
    }
    else if (human == "Paper" && computer == "Scissors"){
        computerScore++;
        return "PC choose: "+computer+" => You lose!";
    }
    else if (human == "Scissors" && computer == "Rock"){
        computerScore++;
        return "PC choose: "+computer+" => You lose!";
    }
    else if (human == "Scissors" && computer == "Paper"){
        humanScore++;
        return "PC choose: "+computer+" => You won!";
    }
    else 
        return "PC choose: "+computer+" => It is a draw!";
}

function playGame() {
    let gameOver = false;
    while (gameOver == false){
        let typeOfGame=parseInt(prompt("Select game style: 1-best of 3, 2-best of 5"));
        humanScore=0;
        computerScore=0;
        let numberOfRounds = 0;
        if (typeOfGame == 1)
            numberOfRounds = 2;
        else if (typeOfGame == 2)
            numberOfRounds = 3;
        else{
            alert("Wrong choice, choose again!");
            continue;
        }
        while(humanScore != numberOfRounds && computerScore != numberOfRounds){
            let result = playRound(getHumanChoice(), getCompucterChoice());
            alert(result+" Your score: "+humanScore+" PC score: "+computerScore);
            if (humanScore == numberOfRounds){
                alert("You won the game!");
            }
            else if (computerScore == numberOfRounds){
                alert("Computer won the game!");
            }
        }
    }
}

/* FOR TRACKING PLAYER SCORES */
const pcScore = document.querySelector("#pc-btn");
const playerScore = document.querySelector("#player-btn");

/*CONTROLS*/
const powerBtn = document.querySelector("#power");
const gameControls = document.querySelectorAll(".button");

/*IMAGES*/
const imgContainer = document.querySelector(".hand-container");
const pcImg = document.querySelector(".computer img");
const playerImg = document.querySelector(".player img");

/*ON LOAD IT SHOULD N SHOW RESULT BEFORE CLICKING ON A POWER BUTTON*/
pcScore.innerText = "";
playerScore.innerText = "";

function updateResult (computerScore, humanScore){
    pcScore.innerText = computerScore;
    playerScore.innerText = humanScore;
}

/*SET BUTTONS AND HANDS VISIBLE AND HIDDEN WHEN CLICKING POWER BUTTON*/ 
function setControlsVisible() {
    gameControls.forEach(element => {
        element.style.visibility="visible";
    });
}

function removeControlsVisibility (){
    gameControls.forEach(element=>{
        element.style.visibility="hidden";
    });
}

/*THIS SHOWS GAME CONTROLS ON FIST CLICK, AND ON SECOND IT HIDES THEM AND RESET SCORE COUNT*/
powerBtn.addEventListener("click", ()=>{
    
    if(!powerBtn.dataset.clicked){
        powerBtn.setAttribute("data-clicked",true);
        updateResult(0, 0);
        computerScore=0;
        humanScore=0;
        numberOfRounds=5;
        imgContainer.style.visibility="visible";
        setControlsVisible();
    }
    else{
        powerBtn.removeAttribute("data-clicked");
        removeControlsVisibility();
        computerScore=0;
        humanScore=0;
        imgContainer.style.visibility="hidden";
        updateResult("", "");
    }
});

gameControls.forEach((control,index) => {
    control.addEventListener("click", ()=>{
        pcImg.classList.add("shakeComputer");
        playerImg.classList.add("shakePlayer");

        setTimeout(()=>{
            pcImg.classList.remove("shakeComputer");
            playerImg.classList.remove("shakePlayer");

            let playerChoice;
            if(index === 2){
                    playerChoice = getCompucterChoice();
            }
            else {
                playerChoice = control.value;
            }
            
            playerImg.src="./images/hand-img/"+playerChoice+"Play.png";
            let pcChoice = getCompucterChoice();
            pcImg.src="./images/hand-img/"+pcChoice+"PC.png";
            console.log(humanScore);
            console.log(computerScore);
            console.log(numberOfRounds);
            playOnce(pcChoice,playerChoice);
            updateResult(computerScore, humanScore);
        }, 900);
    });
});

function playOnce (pcHand, playerHand){
    if(pcHand == "stone" && playerHand == "paper")
        humanScore++;
    else if (pcHand == "stone" && playerHand == "scissors")
        computerScore++;
    else if (pcHand == "paper" && playerHand == "scissors")
        humanScore++;
    else if (pcHand == "paper" && playerHand=="stone")
        computerScore++;
    else if (pcHand == "scissors" && playerHand == "stone")
        humanScore++;
    else if (pcHand == "scissors" && playerHand == "paper")
        computerScore++;
    else {
        computerScore=computerScore;
        humanScore=humanScore;
    }
}