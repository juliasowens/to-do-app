function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
// get the text
   let title = newToDoText.value;
// create a new li
   let newLi = document.createElement('li');
// create a new input
   let checkbox = document.createElement('input');
// set the input's type to checkbox
   checkbox.type = "checkbox";
// delete item
   let deleteButton = document.createElement("button");
// set the delete's textContent to deleteButton
   deleteButton.textContent = "Delete";

  deleteButton.addEventListener('click',function(event){
  //console.log(event);
  //this.parentElement represents button's <li> parent
  toDoList.removeChild(this.parentElement);
})
// set the title
   newLi.textContent = title;
// attach the checkbox to the li
   newLi.appendChild(checkbox);
// attach delete button to the li
   newLi.appendChild(deleteButton);
// attach the li to the ul
   toDoList.appendChild(newLi);
//empty the input
   newToDoText.value = '';
});
};

window.onload = function() {
  onReady ();
};
