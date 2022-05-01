let items = document.querySelectorAll(".item");
let lists = document.querySelectorAll(".list");
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoAdd = document.querySelector("#Task");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    return;
  }
  const newTodoText = todoInput.value.trim();
  const newLi = document.createElement("div");
  newLi.classList.add("dragContainer");
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  itemDiv.setAttribute("draggable", "true");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.innerText = newTodoText;
  const span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.innerText = "delete";
  span.addEventListener('click',clickHandler);
  newLi.appendChild(itemDiv);
  itemDiv.appendChild(todoDiv);
  itemDiv.append(span);
  console.log(newLi);
  Task.appendChild(newLi);
  todoInput.value = "";
  addEventOnItems(itemDiv);
});

items.forEach((item) => {
  addEventOnItems(item);
});

function addEventOnItems(item) {
  item.addEventListener("dragstart", (e) => {
    item.classList.add("dragging");
    if(item.classList.contains("completedTask")){
      item.classList.remove("completedTask");
    }
  });
  item.addEventListener("dragend", (e) => {
    if(e.target.parentNode.classList.contains("completed")){
      item.classList.remove("dragging");
      item.classList.add("completedTask");
    }
    item.classList.remove("dragging");
  });
}

lists.forEach((list) => {
  dragOver(list);
});

function dragOver(list) {
  list.addEventListener("dragover", (e) => {
    e.preventDefault();
    let draggingItem = document.querySelector(".dragging");
    console.log(e.target);
    const dragElement = e.target;
    if (dragElement.classList.contains("todo")) {     
      dragElement.parentNode.before(draggingItem); 
    }else if(dragElement.classList.contains("item")){
      dragElement.before(draggingItem);

    }else {
      list.appendChild(draggingItem);
    }
  });
}

function clickHandler(e){
  const deleteElement =e.target.parentNode;
  if(deleteElement.classList.contains("item")){
    deleteElement.remove();
  }
}
