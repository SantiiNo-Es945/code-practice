//adding when button is clicked
let btn = document.getElementById("plus");
let count = 0;
btn.addEventListener("click", () => {
    let text = document.getElementById("count");
    count++;
    text.textContent = count;
});
//resting when button is clicked
let minusBtn = document.getElementById("minus");
//arrow function
minusBtn.addEventListener("click", () => {
    let text = document.getElementById("count");
    count--;
    text.textContent = count;
});