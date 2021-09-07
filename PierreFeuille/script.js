let nomutilisateur = prompt("Entrez votre nom d'utilisateur !")

let pierre = document.getElementById("pierre");
let feuille = document.getElementById("feuille");
let ciseaux = document.getElementById("ciseaux");
let spock = document.getElementById("spock");
let lezard = document.getElementById("lezard");
let imgjoueur = document.getElementById("img_joueur");
let imgcomputer = document.getElementById("img_computer");

let partie = document.getElementById("partie");
let result = document.getElementById("result");
let reset = document.getElementById("reset");
let scorep = 0
let scorej = 0
let nbmpartie = 0
let winp = 0
let winj = 0
console.log(typeof (localStorage.winj))
console.log(typeof (localStorage.winp))

if (localStorage.winj != null) {
    console.log("winj")
    winj = parseInt(localStorage.winj)
}

if (localStorage.winp != null) {
    console.log("winp")
    winp = parseInt(localStorage.winp)
}

if (localStorage.nbmpartie != null) {
    console.log("nbmpartie")
    nbmpartie = parseInt(localStorage.nbmpartie)
}

reset.addEventListener("click", function () {
    localStorage.clear()
    location.reload();
    return false;
})


let choix = [pierre.id, feuille.id, ciseaux.id, spock.id, lezard.id];


//Fonctions

pierre.addEventListener("click", jeu,);
feuille.addEventListener("click", jeu);
ciseaux.addEventListener("click", jeu);
spock.addEventListener("click", jeu);
lezard.addEventListener("click", jeu);

function jeu() {
    let choix_alea = choix[Math.floor(Math.random() * (5))]
    let choix_joueur = this.id;
    partie.innerHTML = ("L'ordinateur a joué " + choix_alea + ", " + nomutilisateur + " a joué " + choix_joueur);
    partie.style = ("font-size: 18px; font-family: 'Press Start 2P', cursive;")
    result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif;")

    if (choix_joueur == choix_alea) {
        result.innerHTML = "Egalité";
        scorep += 0
        scorej += 0
    } else if (choix_joueur == "pierre" && choix_alea == "ciseaux") {
        result.innerHTML = "Gagné !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #6af76d;")
        scorej += 1
    } else if (choix_joueur == "feuille" && choix_alea == "pierre") {
        result.innerHTML = "Gagné !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #6af76d;")
        scorej += 1
    } else if (choix_joueur == "ciseaux" && choix_alea == "feuille") {
        result.innerHTML = "Gagné !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #6af76d;")
        scorej += 1
    } else if (choix_joueur == "pierre" && choix_alea == "lezard") {
        result.innerHTML = "Gagné !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #6af76d;")
        scorej += 1
    } else if (choix_joueur == "lezard" && choix_alea == "spock") {
        result.innerHTML = "Gagné !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #6af76d;")
        scorej += 1
    } else if (choix_joueur == "spock" && choix_alea == "ciseaux") {
        result.innerHTML = "Gagné !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #6af76d;")
        scorej += 1
    } else if (choix_joueur == "ciseaux" && choix_alea == "lezard") {
        result.innerHTML = "Gagné !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #6af76d;")
        scorej += 1
    } else if (choix_joueur == "lezard" && choix_alea == "feuille") {
        result.innerHTML = "Gagné !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #6af76d;")
        scorej += 1
    } else if (choix_joueur == "feuille" && choix_alea == "spock") {
        result.innerHTML = "Gagné !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #6af76d;")
        scorej += 1
    } else if (choix_joueur == "spock" && choix_alea == "pierre") {
        result.innerHTML = "Gagné !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #6af76d;")
        scorej += 1
    } else {
        result.innerHTML = "Perdu !";
        result.style = ("font-size: 36px; font-family: 'Rubik Mono One', sans-serif; color: #ff6052;")
        scorep += 1
    }

    if (choix_joueur == "pierre") {
        console.log("Choix pierre")
        symbolJ = "pierre";
        imgjoueur.src = "images/pierre.png";
    } else if (choix_joueur == "ciseaux") {
        symbolJ = "ciseaux";
        imgjoueur.src = "images/ciseaux.png";
    } else if (choix_joueur == "feuille") {
        symbolJ = "feuille";
        imgjoueur.src = "images/feuille.png";
    } else if (choix_joueur == "lezard") {
        symbolJ = "lezard";
        imgjoueur.src = "images/lezard.png";
    } else if (choix_joueur == "spock") {
        symbolJ = "spock";
        imgjoueur.src = "images/spock.png";
    }

    if (choix_alea == "pierre") {
        symbolC = "pierre";
        imgcomputer.src = "images/pierre.png";
    } else if (choix_alea == "ciseaux") {
        symbolC = "pierre";
        imgcomputer.src = "images/ciseaux.png";
    } else if (choix_alea == "feuille") {
        symbolC = "feuille";
        imgcomputer.src = "images/feuille.png";
    } else if (choix_alea == "lezard") {
        symbolC = "lezard";
        imgcomputer.src = "images/lezard.png";
    } else if (choix_alea == "spock") {
        symbolC = "spock";
        imgcomputer.src = "images/spock.png";
    }




    document.getElementById("scorej").innerHTML = nomutilisateur + " a " + scorej + " points";
    document.getElementById("scorej").style = ("font-size: 14px; font-family: 'Press Start 2P', cursive;");
    document.getElementById("scorep").innerHTML = "L'ordinateur a " + scorep + " points";
    document.getElementById("scorep").style = ("font-size: 14px; font-family: 'Press Start 2P', cursive;");

    if (scorej == 3) {
        alert("Vous avez gagné !");
        nbmpartie += 1;
        winj += 1
        scorep = 0;
        scorej = 0;
    } else if (scorep == 3) {
        alert("Vous avez perdu !");
        nbmpartie += 1;
        winp += 1
        scorep = 0;
        scorej = 0;
    } else {
        nbmpartie += 0;
        winj += 0;
        winp += 0;
    }

    document.getElementById("nbmpartie").innerHTML = "Vous avez joué " + nbmpartie + " parties";
    document.getElementById("nbmpartie").style = ("font-size: 14px; font-family: 'Press Start 2P', cursive;")
    let joueur = document.getElementById("joueur")
    joueur.innerHTML = "Parties gagnées du joueur : " + winj;
    joueur.style = "font-family: 'Press Start 2P', cursive; font-size: 12px;"
    let computer = document.getElementById("computer");
    computer.innerHTML = "Parties gagnées du robot : " + winp;
    computer.style = "font-family: 'Press Start 2P', cursive; font-size: 12px;"

    localStorage.nbmpartie = nbmpartie;
    localStorage.winj = winj;
    localStorage.winp = winp;

    if (window.matchMedia("(max-width: 1024px").matches) {
        partie.style = ("font-size: 12px; font-family: 'Press Start 2P', cursive;")
        result.style = ("font-size: 24px; font-family: 'Rubik Mono One', sans-serif;")
    }
}