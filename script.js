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
  const newLiInnerHtml = `
    <div class="item" draggable="true">
    <div class="todo">${newTodoText}</div>
    <span class="material-symbols-outlined"> drag_handle </span>
  </div>`;
  newLi.innerHTML = newLiInnerHtml;
  Task.appendChild(newLi);
  todoInput.value = "";
  addEventOnItems(newLi);
});

items.forEach((item) => {
  addEventOnItems(item);
});

function addEventOnItems(item) {
  item.addEventListener("dragstart", (e) => {
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", (e) => {
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
    list.appendChild(draggingItem);
  });
}
