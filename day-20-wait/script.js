function wait(ms) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("2 seconds");
        }, ms);
    });
}
wait(2000).then((message) => console.log(message));