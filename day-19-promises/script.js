let n = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Done!");
    }, 2000);
});

n.then((message) => {
    console.log(message);
});
console.log("Waiting...");