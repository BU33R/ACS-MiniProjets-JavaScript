
let allInputs = localStorage.getItem("allElements").split(',')
let elmt_listElement = document.getElementById("list-element");
let baseElement = document.getElementById("element");

for(text of allInputs){
    adapted_element = baseElement.cloneNode(true)
    adapted_element.children[1].value = text
    elmt_listElement.appendChild(adapted_element)
}

let listDesElements = elmt_listElement.children
console.log(listDesElements[0])
for(element of listDesElements){
    element.children[0].addEventListener("click", function(){
        console.log("j'aicliquésurdone")
        this.nextElementSibling.style.background = "green";
        actualise()
    })
    element.children[1].addEventListener("input", function(){
        // allInputs[counter] = this.value;
        console.log(allInputs)
        actualise()
    })
    element.children[2].addEventListener("click", function(){
        console.log("j'aicliquésurdelete")
        this.parentNode.parentNode.removeChild(this.parentNode)
        actualise()
    })
}
function actualise(){
    counter = -1;
    allInputs = []
    allInputs.
    for(element of listDesElements){
        counter += 1;
        
        allInputs.push(element.children[1].value)
    }
    localStorage.setItem("allElements", allInputs)
}


