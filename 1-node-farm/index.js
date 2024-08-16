const fs = require("fs");

const textIn = fs.readFileSync("./1-node-farm/txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about the Avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./1-node-farm/txt/output.txt", textOut);
console.log("File Written!");
