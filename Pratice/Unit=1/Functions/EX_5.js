// (5). fs
// read, write, update and delete files.

const fs = require("fs");
fs.writeFile("best.txt","Hello, MCA-Z2 Class!",(err)=>{
if (err) throw err;
console.log("File has been saved!");
});
fs.readFile("best.txt","utf8",(err,data)=>{
if (err) throw err;
console.log("File content: ",data);
});