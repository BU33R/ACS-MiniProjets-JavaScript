// localStorage.clear();
class apprenant{
    constructor(name, photo, passed){
        this.name = name;
        this.photo = photo;
        this.passed = passed;
        this.elementHtml = createElementHtml();


        this.areaGuyChoiced = document.getElementById('div-personne-choisi')
        this.areaNotPassed = document.getElementById('lapin')
        this.areaPassed = document.getElementById('personne-passee')
        if (passed){
            this.areaPassed.appendChild(this.elementHtml)
        }else{
            this.areaNotPassed.appendChild(this.elementHtml)
        }

        this.posTop = 0;
        this.posLeft = 0;
        this.setPosition
    }


    getPosition(){
        return [this.elementHtml.offsetTop, this.elementHtml.offsetLeft]
    }

    setPosition(top, left, auto=false){
        this.posTop = top + 'px';
        this.posLeft = left + 'px';
        if(auto){
            let posTable = this.getPosition()
            this.posTop  = posTable[0] + 'px';
            this.posLeft = posTable[1] + 'px';
        }
    }

    deplacementTo(areaTarget, verfiLast = false){
        let copy_guy
        copy_guy = this.elementHtml.cloneNode(true)
        copy_guy.style.opacity = '0'
        areaTarget.appendChild(copy_guy)
        console.log("Avant ", this.elementHtml.offsetLeft, this.elementHtml.offsetTop, "Après ", copy_guy.offsetLeft, copy_guy.offsetTop  )
        this.setPosition(0, 0, true)
        this.elementHtml.style.position = 'absolute';
        this.elementHtml.style.top = this.elementHtml.offsetTop + 'px';
        this.elementHtml.style.left = this.elementHtml.offsetLeft + 'px';
        this.elementHtml.style.top = copy_guy.offsetTop + 'px';
        this.elementHtml.style.left = copy_guy.offsetLeft + 'px';
        areaTarget.removeChild(copy_guy);

        setTimeout(() => {
            areaTarget.appendChild(this.elementHtml);
            this.elementHtml.style.position = 'static';

            if (verfiLast){
                console.log("on verifie")
                verifingLastPassage()
                btnChoisir.disabled = false
            }else{
                btnChoisir.disabled = false
            }
        }, 500);
    }
}

let idGenerated = 0;

// Les listes textuels d'apprenants
let listNotPassed = []
listNotPassed = ["Tommy", "Joselito", "Francis", "Alphonso", "Dylan", "Yamina", "Laurent", "Arthur", "Céleste", "Lucas", "Aleadin", "Marley"]
let listPassed = []
let pGuyChoiced = document.getElementById("p-personne-choisi")
let pNotPassed = document.getElementById("not-passed")
let pPassed = document.getElementById("passed")


// Les listes de classes d'apprenants
let notPassed = []
let onBoard = []
let passed = []

//Data
let images=["icon.svg", "icon.svg", "icon.svg", "icon.svg","icon.svg", "icon.svg", "icon.svg", "icon.svg","icon.svg", "icon.svg", "icon.svg", "icon.svg" ]
let photos = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

//Boutons
let btnChoisir = document.getElementById("btn-choisir")
let btnOk = document.getElementById('btn-ok')


// Les zones (div) où sont les elements html
let areaGuyChoiced = document.getElementById('div-personne-choisi')
let areaNotPassed = document.getElementById('lapin')
let areaPassed = document.getElementById('personne-passee')

// if(!localStorage.getItem("first")){
//     listNotPassed = ["Tommy", "Joselito", "Francis", "Alphonso", "Dylan", "Yamina", "Laurent", "Arthur", "Céleste", "Lucas", "Aleadin", "Marley"]
//     listPassed = []
// }else{
//     listNotPassed = localStorage.getItem("notPassed").split(',')
//     listPassed = localStorage.getItem("Passed").split(',')
// }

for(i=0; i<listNotPassed.length; i++){
    notPassed.push(new apprenant(listNotPassed[i], photos[i] , false))
}


for(i=0; i<listPassed.length; i++){
    passed.push(new apprenant(listPassed[i], photos[i], true))
}

affiche();


btnChoisir.addEventListener("click", function(){
    btnChoisir.disabled = true;
    if(onBoard.length > 0){
        onBoard[0].deplacementTo(areaPassed, true);
        passed.push(onBoard[0]);
        onBoard = [];
    }
    choisirGuy();
    affiche();
})

// btnOk.addEventListener("click", function(){
//     len = areaGuyChoiced.children.length
//     console.log(len)
//     for(i = 0; i < len; i++){
//         deplacement(areaGuyChoiced.children[0], areaPassed, true)
//     }
// });

function verifingLastPassage(){
    if (!notPassed.length){
        // notPassed = passed
        // passed = []
        // console.log("Enfant passées : ", areaPassed.children.length)
        let fin = areaPassed.children.length;
        while(passed != []){
            passed[0].deplacementTo(areaNotPassed)
            notPassed.push(passed[0])
            passed.shift()
        }
        // for(i = 0; i < areaNotPassed.children.length; i++){
        //     console.log("on est là")
        //     areaNotPassed.children[i].style.top =  areaNotPassed.children[i].offsetTop + 'px';
        //     areaNotPassed.children[i].style.left =  areaNotPassed.children[i].offsetLeft + 'px';
        // }
        affiche();
    }
}

function affiche(){
    pNotPassed.innerHTML = ""
    for(np of notPassed){
        pNotPassed.innerHTML += np.name + " <br>"
    }
    pPassed.innerHTML = ""
    for(p of passed){
        pPassed.innerHTML += p.name + " <br>"
    }

    // pNotPassed.innerHTML = notPassed.join(" <br>")
    // window.localStorage.setItem("notPassed", notPassed)
    // window.localStorage.setItem("Passed", passed)
    // window.localStorage.setItem("first", false)
}

function choisirGuy(){
    if(notPassed.length == 1){
        idChoice = 0;
    }else{
        idChoice = Math.floor(Math.random()*(notPassed.length));
    };
    choice = notPassed[idChoice]
    // console.log("Le choix est ", idChoice, choice)
    if (choice == ""){
        console.log("Le problème !!")
        notPassed.splice(idChoice, 1)
        choisirGuy()
    }else{
        notPassed.splice(idChoice, 1)
        pGuyChoiced.innerHTML = choice.name
        console.log("choice : ", typeof choice, choice)
        choice.deplacementTo(areaGuyChoiced)
        onBoard.push(choice)
    }
}




function createElementHtml(){
    elementHtml = document.createElement('img');
    elementHtml.id = idGenerator();
    elementHtml.src= images[idGenerated-1];
    elementHtml.alt="Someone" + idGenerated;
    elementHtml.className="apprenant";
    elementHtml.draggable="true";
    elementHtml.ondragstart="drag(event)";
    elementHtml.style.background = "rgb("+Math.floor(Math.random()*255)+" , "+Math.floor(Math.random()*255)+" , "+Math.floor(Math.random()*255)+")";
    return elementHtml
}
//Drag and drop
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
    dragElement = document.getElementById(data)
    ev.target.appendChild(dragElement);
    dragElement.style.opacity = "1"
}
function refuseDrop(ev){
    var data = ev.dataTransfer.getData("text");
    dragElement = document.getElementById(data)
    dragElement.style.opacity = "1"
}

//Autre fonctions
function idGenerator(){
    idGenerated ++;
    return 'id-' + idGenerated
}

