const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const doneBtn = document.createElement("button");
  doneBtn.className = "done";
  doneBtn.textContent = "✔";
  doneBtn.onclick = () => {
    span.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.append(doneBtn, editBtn, deleteBtn);
  li.append(span, actions);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}
