// (1).Add function

// import add from "./add.js";
// // const add = require("./add.js");
// console.log(add(11,22));
// console.log(add(33,22));




// (2).Path

// const path = require("path");
// // Get the directory name of the current module
// console.log("Directory name: ",__dirname);
// console.log(path.basename(__dirname + "/myfile.txt"));
// console.log("Full path: ",path.resolve(__dirname,"myfile.txt"));
// const moment = require("moment");




// (3).moment

// const moment = require("moment");
// console.log("Current date and time: ",moment().format("DD-MM-YYYY HH:mm:ss"));




//(4).lodash

// const ls = require("lodash");
// console.log("capitalize: ",ls.capitalize("Hello World"));




// (5).fs

// const fs = require("fs");
// fs.writeFile("best.txt","Hello, MCA-Z2 Class!",(err)=>{
// if (err) throw err;
// console.log("File has been saved!");
// });
// fs.readFile("best.txt","utf8",(err,data)=>{
// if (err) throw err;
// console.log("File content: ",data);
// });