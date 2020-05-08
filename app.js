//selectors
const toDoInput = document.querySelector(".to-do-input");
const toDoButton =document.querySelector(".to-do-button");
const toDoList= document.querySelector(".to-do-list");

//listeners
toDoButton.addEventListener("click",addToDO);
toDoList.addEventListener("click",addRemove);

//functions
 function addToDO(event){
  event.preventDefault();
  console.log("hey now brwon cow");
  const toDoDiv= document.createElement("div");
  toDoDiv.classList.add("to-do");

  const newToDO=document.createElement("li");
  newToDO.innerText=toDoInput.value;
  newToDO.classList.add("to-do-item");
  toDoDiv.appendChild(newToDO);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton);


  const deleteButton = document.createElement("button");
  deleteButton.innerHTML='<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  toDoDiv.appendChild(deleteButton);

  toDoList.appendChild(toDoDiv);
  toDoInput.value="";
 }
function addRemove(event){
  const item=event.target;
  console.log(item);
  if(item.classList[0]=="delete-btn"){
    // item.parentElement.remove();
    const toDo=item.parentElement;
    console.log(toDo);
    toDo.classList.add("goback");
    toDo.addEventListener("transitionend",function(){
      toDo.remove();
    });

  }
  if(item.classList[0]=="complete-btn"){
    item.parentElement.classList.toggle("completed");
  }
}
