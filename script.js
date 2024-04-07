function addTask() {
    var taskInput = document.getElementById("todo-input");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        var doneButton = document.createElement("button");
        doneButton.textContent = "완료";
        doneButton.onclick = function() {
            moveTask(taskItem, "todo-list", "done-list");
        };

        taskItem.appendChild(doneButton);

        document.getElementById("todo-list").appendChild(taskItem);

        taskInput.value = "";
    }
}

function moveTask(task, fromListId, toListId) {
    var fromList = document.getElementById(fromListId);
    var toList = document.getElementById(toListId);

    fromList.removeChild(task);
    task.removeChild(task.lastChild); // Remove the button

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        deleteTask(task, toListId);
    };

    task.appendChild(deleteButton);

    toList.appendChild(task);
}

function deleteTask(task, listId) {
    var list = document.getElementById(listId);
    list.removeChild(task);
}

document.getElementById("todo-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
