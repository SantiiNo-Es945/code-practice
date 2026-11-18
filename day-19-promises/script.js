/*let n = new Promise((resolve) => {
setTimeout(() => {
        resolve("Done!");
    }, 2000);
});

n.then((message) => {
    console.log(message);
});
console.log("Waiting...");*/

let ageCheck = new Promise ((resolve, reject) => {
    let age = 20;
    if (age >= 18) {
        resolve("Welcome");
    } else {
        reject("Too young");
    }

});

ageCheck
    .then((message) => console.log(message))
    .catch((error) => console.log(error));