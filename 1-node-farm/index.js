const fs = require("fs");
const http = require("http");
const url = require("url");

// ///////////////////////////////////////
/////// FILE

// const textIn = fs.readFileSync("./1-node-farm/txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the Avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./1-node-farm/txt/output.txt", textOut);
// console.log("File Written!");

// non blocking asynchronous way

// fs.readFile("./1-node-farm/txt/start.txt", "utf-8", (err, Date1) => {
//     fs.readFile(`./1-node-farm/txt/${Date1}.txt`, "utf-8", (err, Date2) => {
//         console.log(Date2);
//         fs.readFile("./1-node-farm/txt/append.txt", "utf-8", (err, Date3) => {
//             console.log(Date3);

//             fs.writeFile(
//                 "./1-node-farm/txt/final.txt",
//                 `${Date2}\n${Date3}`,
//                 "utf-8",
//                 (err) => {
//                     console.log("Your file has been written");
//                 }
//             );
//         });
//     });
// });
// console.log("will read this!");

// ///////////////////////////////////////
/////// SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === "/overview" || pathName === "/") {
        res.end("this is the OVERVIEW");
    } else if (pathName === "/product") {
        res.end("this is the PRODUCT");
    } else if (pathName === "/api") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(data);
    } else {
        res.writeHead(404, {
            "content-type": "text/html",
            "my-owen-header": "hello-world"
        });
        res.end("<h1> page is not found </h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listing to request on port 8000");
});
