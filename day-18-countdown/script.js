let display = document.getElementById("display");
let startBtn = document.getElementById("startBtn");
let count = 5;
startBtn.addEventListener("click", () => {
    count = 5;
    display.textContent = count;
    startBtn.disabled = true;
    let timer = setInterval(() => {
        count--;
        display.textContent = count;
        if (count === 0) {
            clearInterval(timer);
            startBtn.disabled = false;
        }
    }, 1000);
})