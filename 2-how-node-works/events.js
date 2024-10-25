const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
    console.log("there was new sale!");
});

myEmitter.on("newSale", () => {
    console.log("customer name : jonas");
});

myEmitter.on("newSale", (stock) => {
    console.log(`there are now ${stock} itams left in stock`);
});

myEmitter.emit("newSale", 9);

// ***************************** //

const server = http.createServer();

server.on("request", (req, res) => {
    console.log("Request resived!");
    console.log(req.url);
    res.end("Request recived");
});

server.on("request", (req, res) => {
    console.log("Another request 🥶");
});

server.on("close", () => {
    console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("waiting for requests...");
});
