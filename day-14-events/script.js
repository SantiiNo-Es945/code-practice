let btn = document.getElementById("plus");
let count = 0;
btn.addEventListener("click", () => {
    let text = document.getElementById("count");
    count++;
    text.textContent = count;
});