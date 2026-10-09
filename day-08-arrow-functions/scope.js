let greeting = "Hello from outside";

function showMessage() {
  let message = "Hello from inside";
  console.log(message);
  console.log(greeting);
}

showMessage();
console.log(greeting);