const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, MCA Best!");
});

app.get("/home", (req, res) => {
    res.send("Home Page");
});

app.listen(80, () => {
    console.log("Server is running at http://localhost:80/");
});
