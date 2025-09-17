//Sequelize
const Sequelize = require("sequelize");

//Connection
const db = new Sequelize("mca", "root", "",{
    host: "localhost",
    dialect: "mysql"
});

//Test connection
// db.authenticate()
//     .then(() => {
//         console.log("Connection has been established successfully");
//     })
//     .catch((err) => {
//          console.error("Unable to connect to the database: ",err);
//     });
 
//Create model   
const Student = db.define("Student", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    city:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}) ;

//Sync model
// Student.sync()
//     .then(() => {
//         console.log("Student table created successfully");
//     })
//     .catch((err) => {
//         console.error("Unable to create table: ",err);
//     });

//insert data
// Student.create({
//     name: "Vaghasiya Meet V.",
//     city: "Rajkot",
//     email: "meetvaghasiya@gmail.com"
//     })
//     .then(() => {
//         console.log("Data inserted successfully");
//     })
//     .catch((err) => {
//         console.error("Unable to insert data: ",err);
//     });

//fetch data
// Student.findAll(where = {city: 'Surat'})
//     .then((Students) => {
//         console.log(Students);
//     })
//     .catch((err) => {
//         console.error("Unable to insert data: ",err);
//     });

//fetch single data
// Student.findByPk(2)
//     .then((Student) => {
//         console.log(Student);
//     })
//     .catch((err) => {
//         console.error("Unable to insert data: ",err);
//     });

//update data
// Student.update({name: "Yash", city: "Surat"},
//     {
//         where: {id: 2},
//     })
//     .then(() => {
//         console.log("Data updated successfully");
//     })
//     .catch((err) => {
//         console.error("Unable to update data: ",err);
//     });

//delete data
// Student.destroy({
//     where: {id: 2},
//     })
//     .then(() => {
//         console.log("Data deleted successfully");
//     })
//     .catch((err) => {
//         console.error("Unable to delete data: ",err);
//     });
