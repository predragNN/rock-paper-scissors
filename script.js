function getHumanChoice(){
    let valid = false;
    while (valid == false)
    {
        let izbor = parseInt(prompt("Type: 1-rock, 2-paper, 3-scissors"));
        if (izbor == 1){
                valid=true;
                return "Rock";
            }
        else if (izbor == 2){
            valid = true;
            return "Paper";
        }
        else if (izbor == 3){
            valid = true;
            return "Scissors";
        }
        else{
            alert("Wrong choice, choose again");
        }
    }
};

function getCompucterChoice() {
    let randomIzbor = Math.floor(Math.random()*3);
    if (randomIzbor == 0)
        return "Rock";
    else if (randomIzbor == 1)
        return "Paper";
    else
        return "Scissors";
}

let humanScore = 0;
let computerScore = 0;

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

/*playGame();*/