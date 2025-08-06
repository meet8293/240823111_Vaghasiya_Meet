const express = require("express");
const app = express();
app.use(express.json());

//index to get all the data
app.get("/", (req, res) => {
    res.send("All Students!");
});

//show_to get a specific data
app.get("/show/:id", (req, res) => {
    // res.send("One Student!");
    res.send(`show student with ID \n ID: ${req.params.id}`);
});

//store_to add new data
app.post("/store", (req, res) => {
    // res.send("Create a new Student!");
    res.send(`insert \n Name: ${req.body.name}, \n City: ${req.body.city} \n into database!`);
});

//update_to update existing data
app.put("/update/:id", (req, res) => {
    //res.send("Update a Student!");
    res.send(`update \n ID: ${req.params.id}, \n Name: ${req.body.name}, \n City: ${req.body.city} \n into database!`);
});

//delete_to delete existing data
app.delete("/delete/:id", (req, res) => {
    res.send("Delete a Student!");
});

app.listen(80, () => {
    console.log("Server is running at http://localhost:80/");
});