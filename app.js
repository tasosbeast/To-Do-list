const todoInputEl = document.querySelector(".todo-input");
const addTaskBtnEl = document.querySelector(".add-task-btn");
const todoListEl = document.querySelector(".todo-list");

//Add a task
const addTask = () => {
  const taskText = todoInputEl.value.trim();
  if (taskText) {
    const taskItemEl = createTaskItem(taskText);
    todoListEl.appendChild(taskItemEl);
    todoInputEl.value = "";
  }
};
//Create new task items
const createTaskItem = (taskText) => {
  const taskItemEl = document.createElement("li");
  taskItemEl.classList.add("todo-item");

  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.classList.add("checkbox");

  const taskTextSpanEl = document.createElement("span");
  taskTextSpanEl.textContent = taskText;

  const deleteBtnEl = document.createElement("button");
  deleteBtnEl.textContent = "Delete";
  deleteBtnEl.classList.add("delete-btn");
  deleteBtnEl.addEventListener("click", deleteTask);

  taskItemEl.appendChild(checkboxEl);
  taskItemEl.appendChild(taskTextSpanEl);
  taskItemEl.appendChild(deleteBtnEl);

  return taskItemEl;
};
//Delete a task
const deleteTask = (event) => {
  const taskItemEl = event.target.parentElement;
  todoListEl.removeChild(taskItemEl);
};

//Mark a task as completed
const markTaskCompleted = (event) => {
  const taskItemEl = event.target.parentElement;
  taskItemEl.classList.toggle("completed");
};
//Event listeners
addTaskBtnEl.addEventListener("click", addTask);
todoInputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

todoListEl.addEventListener("change", markTaskCompleted);

//Examples of tasks
const initialTasks = ["Buy groceries", "Read a book", "Go for a walk"];
initialTasks.forEach((task) => {
  const taskItemEl = createTaskItem(task);
  todoListEl.appendChild(taskItemEl);
});
