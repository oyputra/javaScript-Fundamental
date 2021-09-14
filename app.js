/** Kumpulkan semua UI elemen */

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

/** Ini adalah kumpulan eventListener */
immediateLoadEventListener();

function immediateLoadEventListener() {
  
  /** mendapatkan todos dari localStorage dan render di browser */
  document.addEventListener("DOMContentLoaded", getTodos);

  /** ini adalah event untuk menambahkan todo  */
  todoForm.addEventListener("submit", addTodo);
  
  /** ini adalah event untuk menghapus 1 todo  */
  todoList.addEventListener("click", deleteTodo);
  
  /** ini adalah event untuk menghapus semua todo  */
  clearButton.addEventListener("click", clearTodos);
  
  /** ini adalah event untuk memfilter todo  */
  filterInput.addEventListener("keyup", filterTodos);
}

/** Reusable codes */
function createTodoElement(value) {
  // Membuat li element
  const li = document.createElement("li");
  
  // menambahkan class pada elemen li
  li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1"

  // menambahkan children pada elemen li
  li.appendChild(document.createTextNode(value))

  // Membuat delete button
  const a = document.createElement("a");

  // Memberu properti untuk a elemen
  a.href = "#";
  a.className = "badge badge-danger delete-todo";

  a.innerHTML = "Delete";

  // Menyelipkan elemen a ke dalam children li
  li.appendChild(a)

  // Memasukan elemen li yang telah dibuat dengan javascript kedalam elemen todolist

  todoList.appendChild(li)
}

function getItemFromLocalStorage() {
  let todos;

  if(localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

/** Ini adalah kumpulan DOM function */
function getTodos() {
  const todos = getItemFromLocalStorage();

  todos.forEach((todo) => {
    createTodoElement(todo)
  })
}

function addTodo(e) {
  e.preventDefault();

  if (todoInput.value) {
    createTodoElement(todoInput.value)
  
    addTodoLocalStorage(todoInput.value);
    
    todoInput.value = ""
  } else {
    alert("Tulis sebuah todo, tidak boleh kosong!")
  }

}

function addTodoLocalStorage(todoInputValue) {
  const todos = getItemFromLocalStorage();

  todos.push (todoInputValue)

  localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteTodo(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete-todo")) {
    if(confirm("Apakah yakin akan menghapus?")){
      const parent = e.target.parentElement;
  
      parent.remove();

      deleteTodoLocalStorage(parent)
    }    
  }
}

function deleteTodoLocalStorage(deletedElement) {
  const todos = getItemFromLocalStorage(); // Menghapus element parent todo 4 (li)

  todos.forEach((todo, index) => {
    if (deletedElement.firstChild.textContent === todo) {
      todos.splice(index, 1)
    }
  })

  localStorage.setItem("todos", JSON.stringify(todos));
} 

function clearTodos() {
  todoList.innerHTML = ""

  clearTodosLocalStorage();
}

function clearTodosLocalStorage() {
  localStorage.clear();
}

function filterTodos(e) {
  const filterText = e.target.value.toLowerCase();
  const todoItem = document.querySelectorAll(".todo-item")

  todoItem.forEach((item) => {
    const itemText = item.firstChild.textContent.toLocaleLowerCase();

    if (itemText.indexOf(filterText) !== -1) {
      item.setAttribute("style", "display: block;");
    } else {
      item.setAttribute("style", "display: none !important;")
    }
    
    console.log(itemText)
  })
}