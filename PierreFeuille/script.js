// let lezard = document.getElementById('lezard')
// let pierre = document.getElementById('pierre')
// let feuille = document.getElementById('feuille')
// let ciseau = document.getElementById('cideaux')
// let spock = document.getElementById('spock')

let computerJoue = document.getElementById('computer-joue')
let playerJoue = document.getElementById('player-joue')
let quiGagne = document.getElementById('qui-gagne')

let choixPossibles = ['lezard','pierre','feuille','cideaux','spock']
let buttons = document.getElementsByTagName('button')
for (choice of buttons){
    choice.addEventListener("click", function(){
        joue(this);
    })
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
        if(computerChoice == ""){}
        

    }
}

