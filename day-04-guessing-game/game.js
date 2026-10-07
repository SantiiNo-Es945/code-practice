const prompt = require("prompt-sync")();

let secret = Math.floor(Math.random() * 100) + 1;
let guess = Number(prompt("Guess a number : "));
while (guess !== secret) {
  if (guess > secret) {
    console.log("Too high");
    guess = Number(prompt("Guess a number : "));
  } else if (guess < secret) {
    console.log("Too low");
    guess = Number(prompt("Guess a number : "));
  } 
}
console.log("Correct");
