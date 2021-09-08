const list = document.getElementById('list'); //___________selecteur________________
const form = document.querySelector('form');  //_________Valeur d'input_____________
const item = document.getElementById('item'); //_____________RENDU__________________

// ajouter un élément
form.addEventListener('submit', (e) => {
  // pour se prévaloir d'un comportement, qui fesait que, ce qui etait taper dans l'input ne restais pas afficher dans la listes
  e.preventDefault();
  // création d'elements et valeur rentrer dans l'input  
  list.innerHTML += `<li>${item.value}</li>`;
  // A chaque ajout, on stock dans le localStorage
  storage();
  //Input repasse a zéro 
  item.value = "";
});

// suppression d'éléments
list.addEventListener('click', (e) => {
  // SI un element dans la liste contient'CHECKED', alors supprime
  if (e.target.classList.contains('checked')) {
    e.target.remove();
    //SINON Le mettre en 'CHECKED'
  } else {
    e.target.classList.add('checked');
  }
  //Actualisation du stockage quand supprimer
  storage();
});

// partie de stockage
function storage() {
  //localStorage du nom de todoList qui contiendras tout les todos
  window.localStorage.todoList = list.innerHTML;
}
//Obtenir les valeurs
function getValues() {
  let storageContent = window.localStorage.todoList;
  //SI storageContent n'existe pas ou si il n'y a rien dedans  
  if (!storageContent) {
    list.innerHTML =
      `<li>Cliquez sur une tâche pour la supprimer</li>`;
    //
  } else {
    list.innerHTML = storageContent;
  }
}
getValues();