let countText = document.getElementById("count");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let count = 0;
plus.addEventListener ("click", () => {
    count++;
    countText.textContent = count;
});
minus.addEventListener("click", () => {
    count--;
    countText.textContent = count;
});