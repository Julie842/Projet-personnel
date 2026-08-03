const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks');
const addButton = document.querySelector('#push');

taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        createTask();
    }
});

addButton.onclick = function () {
    createTask();
};

function createTask() {
    if (taskInput.value.trim().length === 0) {
        alert("The task field is blank. Enter a task name and try again.");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    taskDiv.innerHTML = `
        <label id="taskname">
            <input type="checkbox" onchange="updateTask(this)">
            <p>${taskInput.value}</p>
        </label>
        <div class="delete">
            <i class="uil uil-trash"></i>
        </div>
    `;

    taskDiv.querySelector(".delete").onclick = function () {
        taskDiv.remove();
        checkOverflow();
    };

    taskSection.appendChild(taskDiv);

    taskInput.value = "";

    checkOverflow();
}

function updateTask(taskCheckbox) {
    const taskItem = taskCheckbox.nextElementSibling;
    if (taskCheckbox.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}

function checkOverflow() {
    if (taskSection.offsetHeight >= 300) {
        taskSection.classList.add("overflow");
    } else {
        taskSection.classList.remove("overflow");
    }
}