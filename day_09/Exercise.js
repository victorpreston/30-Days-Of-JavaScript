// This is an async function that logs "async1 start" and waits for async2() to complete
async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}

// This is an async function that logs "async2"
async function async2() {
    console.log("async2");
}

// This logs "script start"
console.log("script start");

// This sets a timeout of 0 milliseconds and logs "setTimeout" after the timeout
setTimeout(function () {
    console.log("setTimeout");
}, 0);

// This calls the async1() function
async1();

// This creates a new promise that logs "promise1" and resolves immediately
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});

// This logs "script end"
console.log("script end");