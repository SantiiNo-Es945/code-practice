let input = document.getElementById("task-input");
let btn = document.getElementById("add-btn");
let list = document.getElementById("task-list");
btn.addEventListener("click", () => {
    let newList = document.createElement("li");
    newList.textContent = input.value;
    input.value = "";
    list.appendChild(newList);
    let newBtn = document.createElement("button");
    newBtn.textContent = "x";
    newList.appendChild(newBtn);

    newBtn.addEventListener("click", () => {
        newList.remove();
    });
});
