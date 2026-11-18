/*let n = new Promise((resolve) => {
setTimeout(() => {
        resolve("Done!");
    }, 2000);
});

n.then((message) => {
    console.log(message);
});
console.log("Waiting...");

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
    .catch((error) => console.log(error));*/



function ageCheck(age) {
    return new Promise ((resolve, reject) => {
        if (age >= 18) {
            resolve("Welcome");
        } else {
            reject("Too young");
        }
    });
}

ageCheck(17).then((message) => console.log(message))
              .catch((error) => console.log(error));


ageCheck(25).then((message) => console.log(message))
            .catch((error) => console.log(error));              

console.log("end");