const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 3;

setTimeout(() => console.log("time 1 finished"), 0);
setImmediate(() => console.log("immediate 1 finished"));

fs.readFile("test-file.txt", () => {
    console.log("I/O finished");
    console.log("____________________");

    setTimeout(() => console.log("time 2 finished"), 0);
    setTimeout(() => console.log("time 3 finished"), 3000);
    setImmediate(() => console.log("immediate 2 finished"));

    process.nextTick(() => console.log("process.nextTick"));

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
    console.log(Date.now() - start, "Password encrypted");

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
    console.log(Date.now() - start, "Password encrypted");

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
    console.log(Date.now() - start, "Password encrypted");

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
    console.log(Date.now() - start, "Password encrypted");
});

console.log("Hello from the top level code");
