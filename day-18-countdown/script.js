let display = document.getElementById("display");
let startBtn = document.getElementById("startBtn");
let count = 5;
startBtn.addEventListener("click", () => {
    let timer = setInterval(() => {
        count--;
        display.textContent = count;
        console.log(count);
        if (count === 0) {
            clearInterval(timer);

        }
    }, 1000);
})