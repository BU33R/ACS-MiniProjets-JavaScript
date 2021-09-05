//localStorage.clear();
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


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.style.opacity = "0"
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data)
    dragElement = document.getElementById(data)
    ev.target.appendChild(dragElement);
    dragElement.style.opacity = "1"
}
function refuseDrop(ev){
    console.log("refes")
    var data = ev.dataTransfer.getData("text");
    dragElement = document.getElementById(data)
    dragElement.style.opacity = "1"
}
