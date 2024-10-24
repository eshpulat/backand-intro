const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
    console.log("there was new sale!");
});

myEmitter.emit("newSale");
