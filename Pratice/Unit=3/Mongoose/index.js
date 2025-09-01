const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://meetvaghasiya64_db_user:789641233@meet8293.31tox7j.mongodb.net/?retryWrites=true&w=majority&appName=Meet8293", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
    name: String,
    department: String,
    startrYear: Number,
    endYear: Number,
    enrollment: Number,
    address: String,
})

const Student = mongoose.model("Student", studentSchema);

console.log("MongoDB connected successfully");

const student = new Student({
    name: "Vaghasiya Meet",
    department: "Computer Science",
    startrYear: 2024,
    endYear: 2026,
    enrollment: 240823111,
    address: "Atmiya University, Rajkot",
});

student
    .save()
    .then(() => {
        console.log("Student saved successfully");
    })
    .catch((error) => {
        console.log("Error saving student:", error);
    });