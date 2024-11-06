const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        massage: "Hello from the Server side",
        app: "Natoures"
    });
});

app.post("/", (req, res) => {
    res.send("you can post to this end point!");
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
