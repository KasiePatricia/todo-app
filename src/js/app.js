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
function clickDots() {
    dots.forEach((dot, index) => {
        dot.addEventListener("click", (e) => {
            // e.target
            if (edits[index].style.display === "block") {
                    edits[index].style.display = "none";
                  } else {
                    edits[index].style.display = "block";
                  }
        })
    });
}


let todos = [
  { title: "Sweep the house ", description: "Going to school", id: 3, isComplete: false },
  { title: "books", description: "buying books",  id: 9, isComplete: false },
  { title: "calls ", description: "call Ogo",  id: 2, isComplete: false },
];

function generateUI(arr) {
    let html = "";
    arr.forEach((todo) => {
        html += `<div class="todo-box">
              <div class="todo-format p-4 todo-format-main" id="todo-format">
              <div
              class="title d-flex justify-content-between align-items-center"
              >
              <h4 class="result-title">${todo.title}</h4>
              <i class="bi bi-three-dots fs-4" onclick="clickDots()"></i>
              </div>
              <p class="py-3 result-description">${todo.description}</p>
              <div
              class="todo-footer d-flex justify-content-between align-items-center"
              >
              <div class="d-flex" style="gap: 5px">
                  <div class="pink"></div>
                  <div class="purple"></div>
              </div>
              <div class="checkbox-label">
                  <input type="checkbox" name="done" id="done" />
                  <label for="done">Done</label>
              </div>
              </div>
          </div>
          <div class="edit rounded p-2">
              <p class="pe-1 cursor" id="editTodo">Edit...</p>
              <p class="border-top pt-1 cursor" id="deleteTodo">Delete</p>
          </div>
        </div>
          `;
      });

      mainArticle.innerHTML = html;
}

generateUI(todos)



// Create TODO
const todoModal = document.getElementById("todo-modal");

todoModal.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(inputTitle.value)

    let currentTodo = {title: inputTitle.value, description: inputDescription.value, id: Date.now(), isComplete: false};
    console.log(todos)
    todos.push(currentTodo);
    closeModal();
    generateUI(todos)
    console.log(todos)
});
//add item to the todolist
//   const addTodo = () =>{
// add the item
//     const title = inputTitle.value;
//     const description = inputDescription.value;
//     todo.push({item : itemInput, id: Math.floor(Math.random() * 15), isComplete: false});

//     return todo;
//   }
// let mainArticle2 = [];

// addbtn.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (inputTitle.value != "" && inputDescription.value != "") {
    //create list

    // resultTitle.innerText = inputTitle.value;
    // resultDescription.innerText = inputDescription.value;
    //   closeModal();

//     mainArticle2.push({
//       item: resultTitle,
//       id: Math.floor(Math.random() * 15),
//       isComplete: false,
//     });

//     return mainArticle2;
//   }

  //   const close = document.querySelectorAll('span');
  //   for(let i=0; i<close.length; i++){
  //       close[i].addEventListener('click', () => {
  //           close[i].parentElement.style.opacity = "0";
  //           setTimeout(() => {
  //               close[i].parentElement.style.display = "none";
  //               close[i].parentElement.remove();
  //           }, 500);
  //       })
  //   }
  //   inputText.value = "";
// });

//delete todo
// const deleteTodo = document.getElementById("deleteTodo");
// const todoFormat = document.getElementById("todo-format");

// deleteTodo.addEventListener("click", (e) => {
//   e.preventDefault();

//   todoFormat.style.opacity = "0";
//   setTimeout(() => {
//     todoFormat.style.display = "none";
//     todoFormat.remove();
//   }, 500);
// });

//Done tasks

// document.getElementById("done").addEventListener("click", function () {
//   resultTitle.style.textDecoration = "line-through";
//   resultDescription.style.textDecoration = "line-through";
// });
