/*
console.log("Start");
setTimeout(() => {
  console.log("Time's up!");
}, 3000);
console.log("End");*/
/*setInterval(() => {
    console.log("tick");
}, 1000)*/

let n = 6;
let timer = setInterval(() => {
    n--;
    console.log(n);
    if (n === 1) {
        clearInterval(timer);
        console.log("Go!");
    }
}, 1000);
