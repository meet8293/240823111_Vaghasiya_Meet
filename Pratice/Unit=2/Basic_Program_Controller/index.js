const express = require("express");
const{
    index,
    show,
    store,
    update,
    destroy,
}=require("./controller/studentcontroller.js");

const app = express();
const PORT = 80;

app.use(express.json());
app.get("/", index);
app.get("/show/:id", show);

//store to insert record in database
app.post("/store", store);
app.put("/update/:id",update);
app.delete("/delete/:id",destroy);

app.listen(80, () => {
    console.log(`server is running at http://localhost:80/`);
});