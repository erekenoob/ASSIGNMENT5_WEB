let tasks = [
  {
    id: 1,
    title: "Assignment 6",
    description: "Complete assignment on time",
    completed: false
  }
];

const todoContainer = document.getElementById("todoContainer");
const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDesc");
const addTaskBtn = document.getElementById("addTaskBtn");

function renderTasks() {
  todoContainer.innerHTML = "";

  tasks.forEach(function (task) {
    const card = document.createElement("div");
    card.className = "todo-card" + (task.completed ? " completed" : "");

    const header = document.createElement("div");
    header.className = "todo-header";

    const titleEl = document.createElement("h4");
    titleEl.textContent = task.title;
    titleEl.addEventListener("click", function () {
      toggleTask(task.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&#10005;";
    deleteBtn.addEventListener("click", function () {
      deleteTask(task.id);
    });

    header.appendChild(titleEl);
    header.appendChild(deleteBtn);

    const body = document.createElement("div");
    body.className = "todo-body";
    body.textContent = task.description;

    card.appendChild(header);
    card.appendChild(body);

    todoContainer.appendChild(card);
  });
}

addTaskBtn.addEventListener("click", function () {
  const title = taskTitle.value.trim();
  const desc = taskDesc.value.trim();

  if (title === "") {
    alert("Please enter a title!");
    return;
  }

  const newTask = {
    id: Date.now(),
    title: title,
    description: desc,
    completed: false
  };

  tasks.push(newTask);

  taskTitle.value = "";
  taskDesc.value = "";

  renderTasks();
});

function deleteTask(id) {
  tasks = tasks.filter(function (t) {
    return t.id !== id;
  });
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find(function (t) {
    return t.id === id;
  });
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

renderTasks();