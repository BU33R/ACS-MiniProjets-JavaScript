const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');

// ajouter un élément
form.addEventListener('submit', (e) => {
  e.preventDefault(); // indique à l'agent utilisateur que si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.
  list.innerHTML += `<li>${item.value}</li>`;
  storage();
  item.value = "";
});

// supprimer l'élément
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('checked')) {
    e.target.remove();
  } else {
    e.target.classList.add('checked');
  }
  storage();
});

// partie de stockage
function storage() {
  window.localStorage.todoList = list.innerHTML;
}

function getValues() {
  let storageContent = window.localStorage.todoList;
  if (!storageContent) {
    list.innerHTML =
      `<li>Cliquez sur une tâche pour la supprimer</li>`;
  } else {
    list.innerHTML = storageContent;
  }
}
getValues();