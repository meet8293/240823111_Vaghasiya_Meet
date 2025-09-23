const Student = require("../models/Student");
exports.index = (req, res) => {
    Student.findAll()
    .then((students) => {
        console.log("All students retrieved successfully: ", students);
        res.send({ message: "Students retrieved successfully", data: students });
    })
    .catch((error) => {
        console.error("Error retrieving students: ",error);
        res.send({ message: "Error retrieving students", error: error });
    });
};
exports.show = (req, res) => {
    Student.findByPk(req.params.id)
    .then((students) => {
        console.log("All students retrieved successfully: ", students);
        res.send({ message: "Students retrieved successfully", data: students });
    })
    .catch((error) => {
        console.error("Error retrieving students: ",error);
        res.send({ message: "Error retrieving students", error: error });
    });
};
exports.store = (req, res) => {
    Student.create(req.body)
    .then((newStudent) => {
        console.log("Student created successfully: ", newStudent);
        res.send({ message: "Student created successfully", data: newStudent });
    })
    .catch((error) => {
        console.error("Error creating student: ",error);
        res.send({ message: "Error creating student", error: error });
    });
};
exports.update = (req, res) => {
    Student.update(req.body, { where: {id: req.params.id }})
    .then(() => {
        console.log("Student updated successfully");
        res.send({ message: "Student updated successfully", data: req.body });
    })
    .catch((error) => {
        console.error("Error updating student: ",error);
        res.send({ message: "Error updating student", error: error });
    });
};
exports.delete = (req, res) => {
    Student.destroy({ where: {id: req.params.id }})
    .then(() => {
        console.log("Student deleted successfully");
        res.send({ message: "Student deleted successfully" });
    })
    .catch((error) => {
        console.error("Error deleting student: ",error);
    });
};