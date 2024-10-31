//mendapatkan elemen dengan id addtask
const button = document.getElementById("addTaskButton");

button.addEventListener("click", () => {
    let input = document.getElementById("taskInput");
    const inputText = input.value;

    if (input) {
        const li = document.createElement("li");
        li.textContent = inputText;

        const list = document.getElementById("taskList");
        list.appendChild(li);
        input.value = "";
    }
});