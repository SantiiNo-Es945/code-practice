let input = document.getElementById("task-input");
let btn = document.getElementById("add-btn");
let list = document.getElementById("task-list");
btn.addEventListener("click", () => {
    if (input.value.trim() === "") {
        return;
    }
    let newList = document.createElement("li");
    newList.textContent = input.value;
    input.value = "";
    list.appendChild(newList);
    let newBtn = document.createElement("button");
    newBtn.textContent = " x ";
    newBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";
    newList.appendChild(newBtn);

    newBtn.addEventListener("click", () => {
        newList.remove();
    });
});
