// localStorage.removeItem("passed");
// localStorage.removeItem("notPassed");
// localStorage.removeItem("first");
let notPassed = []
let passed = []

if(!localStorage.getItem("first")){
    notPassed = ["Tommy", "Joselito", "Francis", "Alphonso", "Dylan", "Yamina", "Laurent", "Arthur", "Céleste", "Lucas", "Aleadin", "Marley"]
    passed = []
}else{
    notPassed = localStorage.getItem("notPassed").split(',')
    passed = localStorage.getItem("Passed").split(',')
}

// console.log("notpassed = ", notPassed, "Passed = ", passed)

let btnChoisir = document.getElementById("btn-choisir")
let pGuyChoiced = document.getElementById("personne-choisi")
let pNotPassed = document.getElementById("not-passed")
let pPassed = document.getElementById("passed")
affiche();

btnChoisir.addEventListener("click", function(){
    choisirGuy();
    affiche();
})

function affiche(){
    pPassed.innerHTML = passed.join(" <br>")
    pNotPassed.innerHTML = notPassed.join(" <br>")
    window.localStorage.setItem("notPassed", notPassed)
    window.localStorage.setItem("Passed", passed)
    window.localStorage.setItem("first", false)
}

function choisirGuy(){
    idChoice = Math.floor(Math.random()*(notPassed.length))
    choice = notPassed[idChoice]
    if (choice == ""){
        notPassed.splice(idChoice, 1)
        choisirGuy()
    }else{
        notPassed.splice(idChoice, 1)
        pGuyChoiced.innerHTML = choice
        passed.push(choice)
        if (!notPassed.length){
            notPassed = passed
            passed = []
        }
    }
}
