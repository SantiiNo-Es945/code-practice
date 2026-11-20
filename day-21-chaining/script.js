function wait(ms) {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve();
        }, ms);        
    });
};
wait(1000).then(() => {
    console.log("1");
    return wait(1000);
}).then(() => {
    console.log("2");
    return wait(1000);
}).then(() => {
    console.log("3");
});
