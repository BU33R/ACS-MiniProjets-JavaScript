
// localStorage.clear();
let playerScore = 0;
let computerScore = 0;
let totalPlayerScore = 0;
let totalComputerScore = 0;
if(localStorage.getItem("totalPlayer")){
    totalPlayerScore = parseInt(localStorage.getItem("totalPlayer"));
    totalComputerScore = parseInt(localStorage.getItem("totalComputer"));
}
let computerJoue = document.getElementById('computer-joue')
let playerJoue = document.getElementById('player-joue')
let quiGagne = document.getElementById('qui-gagne')
let elementScore = document.getElementById('score')
let elementWinner = document.getElementById('winner')
let elementTotal = document.getElementById('total')

let choixPossibles = ['lezard','pierre','feuille','ciseaux','spock']
let buttons = document.getElementsByTagName('button')
for (choice of buttons){
    choice.addEventListener("click", function(){
        joue(this);
    })
}

function youWinRound(){
    quiGagne.innerHTML = "Bravo vous avez gagné";
    playerScore += 1;
}

function youLoseRound(){
    quiGagne.innerHTML = "T'es nul t'as perdu !";
    computerScore += 1;
}

function score(){
    if (playerScore == 3){
        elementWinner.innerHTML = "Vous avez gagné mais on sait tous que c'était du bol !";
        playerScore = 0;
        computerScore = 0;
        totalPlayerScore +=1;
        
    }else if (computerScore == 3){
        elementWinner.innerHTML = "Vous avez perdu, c'est parce que t'es mauvais Jack !";
        playerScore =0;
        computerScore = 0;
        totalComputerScore +=1;
    }
    elementScore.innerHTML = "Vous : " + playerScore + " || " + computerScore + " : Le master"
    elementTotal.innerHTML = "Vous : " + totalPlayerScore + " || " + totalComputerScore + " : Le master"
    localStorage.setItem("totalPlayer", totalPlayerScore)
    localStorage.setItem("totalComputer", totalComputerScore)
}
function joue(choice){
    playerChoice = choice.id;
    computerChoiceIndex = Math.floor(Math.random() * 5)
    computerChoice = choixPossibles[computerChoiceIndex]
    console.log(choice.id)
    playerJoue.innerHTML = choice.id
    computerJoue.innerHTML = computerChoice

    if(playerChoice == computerChoice){
        quiGagne.innerHTML = "Match nul"
    }else if(playerChoice == "lezard") {
        if(computerChoice == "spock" || computerChoice == "feuille"){
            youWinRound();
        }else{
            youLoseRound()
        }
    }else if (playerChoice == "ciseaux"){
        if(computerChoice == "papier" || computerChoice == "lezard"){
            youWinRound();
        }else{
            youLoseRound()
        }
    }else if (playerChoice == "pierre"){
        if(computerChoice == "lezard" || computerChoice == "ciseaux"){
            youWinRound();
        }else{
            youLoseRound()
        }
    }else if(playerChoice == "feuille"){
        if(computerChoice == "pierre" || computerChoice == "spock"){
            youWinRound();
        }else{
            youLoseRound()
        }
    }else if(playerChoice == "spock"){
        if(computerChoice == "ciseaux" || computerChoice == "pierre"){
            youWinRound();
        }else{
            youLoseRound()
        }
    }
    score()
}

