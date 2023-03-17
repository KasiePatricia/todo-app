// Open and close Modal
const modal = document.querySelector(".modal-content");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.getElementById("btn-opened");
const closeModalBtn = document.getElementById("btn-closed");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);

//   TODO List

const addbtn = document.querySelector("#addbtn");
const inputTitle = document.querySelector("#title");
const inputDescription = document.querySelector("#description");
const mainArticle = document.getElementById("main-article");
const edits = document.querySelectorAll(".edit");
const dots = document.querySelectorAll(".bi-three-dots");

let todos = [];

// On app load, get all tasks from localStorage
const todosJson = localStorage.getItem("todos");
if (todosJson) {
  todos = JSON.parse(todosJson);
}
window.onload = todosJson;

function generateUI(arr) {
  let html = "";

  // // check if localStorage has any tasks
  // // if not then return
  // if (localStorage.getItem("todos") == null) return;

  arr.forEach((todo) => {
    html += `<div class="todo-box">
              <div class="todo-format p-3 todo-format-main" id="todo-format">
              <div
              class="title d-flex justify-content-between align-items-center"
              >
              <h6 class="result-title fw-bold">${todo.title}</h6>
              <i class="bi bi-three-dots fs-4" role="button"></i>
              </div>
              <p class="result-description">${todo.description}</p>
              <div
              class="todo-footer d-flex justify-content-between align-items-center"
              >
              <div class="d-flex" style="gap: 5px">
                  <div class="pink h-w-br "></div>
                  <div class="purple h-w-br "></div>
              </div>
              <div class="checkbox-label">
                  <input type="checkbox" name="done" class="done" id="done-${todo.id}"/>
                  <label for="done" for="done-${todo.id}">Done</label>
                </div>
              </div>
          </div>
          <div class="edit rounded p-2">
              <p class="pe-1 cursor" id="editTodo" onclick="updateTodo(${todo.id})">Edit...</p>
              <p class="border-top pt-1 cursor" id="deleteTodo" onclick="deleteTodo(${todo.id})" role="button">Delete</p>

          </div>
        </div>
          `;
  });

  mainArticle.innerHTML = html;

  const dots = document.querySelectorAll(".bi-three-dots");
  const cards = document.querySelectorAll(".todo-box");
  dots.forEach((dot, index) => {
    let card = cards[index],
      edit = card.querySelector(".edit");
    dot.addEventListener("click", (e) => {
      edit.style.display = edit.style.display === "block" ? "none" : "block";
      e.preventDefault();
    });
  });
}

generateUI(todos);

// Clicking outside the box to remove the box
document.addEventListener("click", function (event) {
  const cards = document.querySelectorAll(".todo-box");
  cards.forEach((card) => {
    let edit = card.querySelector(".edit");
    if (edit) {
      let dot = card.querySelector(".bi-three-dots");
      if (!dot.contains(event.target)) {
        edit.style.display = "none";
      }
    }
  });
});

// Create TODO
const todoModal = document.getElementById("todo-modal");

todoModal.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputTitle.value !== "" && inputDescription.value !== "") {
    let currentTodo = {
      title: inputTitle.value,
      description: inputDescription.value,
      id: Date.now(),
      isComplete: false,
    };

    todos.unshift(currentTodo);
    closeModal();
    generateUI(todos);

    inputTitle.value = "";
    inputDescription.value = "";
  }
  localStorage.setItem("todos", JSON.stringify(todos));
});

//Delete TODO
function deleteTodo(id) {
  let remaining = todos.filter((todo) => todo.id != id);
  todos = remaining;
  generateUI(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Update TODO
let title = document.querySelector(".result-title");
let desc = document.querySelector(".result-description");
let updateBtn = document.querySelector("#updatebtn");
let currentId;

function updateTodo(id) {
  openModal();
  let currentTodo = todos.find((todo) => todo.id === id);
  inputTitle.value = currentTodo.title;
  inputDescription.value = currentTodo.description;
  currentId = id;
}

updateBtn.addEventListener("click", function () {
  let currentTodo = todos.find((todo) => todo.id === currentId);
  currentTodo.title = inputTitle.value;
  currentTodo.description = inputDescription.value;
  generateUI(todos);
  closeModal();
  inputTitle.value = "";
  inputDescription.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));
});

//Done tasks

const checkboxes = document.querySelectorAll(".done");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    let todoId = Number(this.getAttribute("id").split("-")[1]);
    let currentTodo = todos.find((todo) => todo.id === todoId);
    currentTodo.isComplete = this.checked;
    let todoTitle = this.closest(".todo-box").querySelector(".result-title");
    let todoDescription = this.closest(".todo-box").querySelector(
      ".result-description"
    );
    if (this.checked) {
      todoTitle.style.textDecoration = "line-through";
      todoDescription.style.textDecoration = "line-through";
    } else {
      todoTitle.style.textDecoration = "none";
      todoDescription.style.textDecoration = "none";
    }
  });
});
