//using getElementById to find and edit content in html
let change = document.getElementById("title");
change.textContent = "Hehehe";
let pChange = document.getElementById("message");
pChange.textContent = "Too easy";

//Now using querySelector
let test = document.querySelector("#message2");
test.textContent = "What is this";
let test2 = document.querySelector(".note");
test2.textContent = "Changing";