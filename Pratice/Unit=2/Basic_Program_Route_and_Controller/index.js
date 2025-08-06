const express = require("express");
const studentRouter = require("./route/studentroute.js");
const app = express();
const PORT = 80;

app.use(express.json());
app.use("/student", studentRouter);
app.listen(80, () => {
    console.log(`Server is running at http://localhost:80 /`);
});