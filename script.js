document.getElementById('taskInp').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

document.getElementById('taskBtn').addEventListener("click", addTask);

function addTask() {
    const taskInp = document.getElementById('taskInp');
    const taskDate = document.getElementById('taskDate');
    const taskVal = taskInp.value.trim();
    
    if (taskVal === "") {
        alert("Please enter a task.");
        return;
    }

    // Creating a new list item for Pending Tasks
    const taskList = document.getElementById('pendingTasks');
    const li = document.createElement("li");

    li.innerHTML = `
    <div>
      <span>${taskVal}</span>
      <div class="task-date">${taskDate.value ? new Date(taskDate.value).toLocaleString() : ''}</div>
    </div>
    <div class="lidiv">
      <button class="complete">✔️</button>
      <button class="edit">✏️</button>
      <button class="delete">❌</button>
    </div>
    `;

    taskList.appendChild(li);
    taskInp.value = "";
    taskDate.value = "";

    // Event listener for completing the task
    li.querySelector('.complete').addEventListener('click', function () {
        markTaskAsCompleted(li);
    });

    // Event listener for editing the task
    li.querySelector('.edit').addEventListener('click', function () {
        editTask(li);
    });

    // Event listener for deleting the task
    li.querySelector('.delete').addEventListener('click', function () {
        taskList.removeChild(li);
    });
}

function markTaskAsCompleted(li) {
    li.classList.add('completed');

    const completedTasks = document.getElementById('completedTasks');
    const taskList = document.getElementById('pendingTasks');

    // Move task to Completed Tasks list
    taskList.removeChild(li);
    completedTasks.appendChild(li);

    // Remove Complete button from the task
    li.querySelector('.complete').remove();
}

function editTask(li) {
    const taskSpan = li.querySelector('span');
    const newTask = prompt('Edit task:', taskSpan.textContent);
    if (newTask !== null) {
        taskSpan.textContent = newTask;
    }
}



