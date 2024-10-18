const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const replaceTemplate = require("./moduls/replacetemplate");

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

const tempOverview = fs.readFileSync(
    `${__dirname}/templates/tamplate-overview.html`,
    "utf-8"
);
const tempCard = fs.readFileSync(
    `${__dirname}/templates/template-card.html`,
    "utf-8"
);
const tempProduct = fs.readFileSync(
    `${__dirname}/templates/template-product.html`,
    "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    // overview page
    if (pathname === "/overview" || pathname === "/") {
        res.writeHead(200, { "Content-type": "text/html" });

        const cardsHtml = dataObj
            .map((el) => replaceTemplate(tempCard, el))
            .join("");
        const output = tempOverview.replace("{%PRODUCT_CARD%}", cardsHtml);
        res.end(output);

        // product page
    } else if (pathname === "/product") {
        res.writeHead(200, { "Content-type": "text/html" });
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

        // API
    } else if (pathname === "/api") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);

        // Not found
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
