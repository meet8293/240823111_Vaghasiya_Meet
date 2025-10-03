const sequalize = require("sequelize");

//Connection
const db = new sequalize("mca", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

//Test connection
db.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database: ", err);
    });

module.exports = db;