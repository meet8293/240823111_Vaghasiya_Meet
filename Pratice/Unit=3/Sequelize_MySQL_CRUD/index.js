const express = require("express");
const sequalize = require("sequelize");

const studentRoute = require("./routes/studentRoute");
const app = express();
const PORT = 80;
app.use(express.json());

app.use("/student", studentRoute);

app.listen(PORT, () => {
    console.log("server is running : http://localhost:" + PORT)
});